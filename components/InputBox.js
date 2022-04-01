import Image from 'next/image'
import { useSession } from 'next-auth/react'
import {
    EmojiHappyIcon
} from "@heroicons/react/outline"
import { VideoCameraIcon } from '@heroicons/react/solid';
import { useRef, useState } from 'react';
import { db, storage } from '../firebase';
import firebase from 'firebase';
import { redirect } from 'next/dist/server/api-utils';


function InputBox() {
    const {data: session} = useSession();
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [imageToPost, setImagetoPost] = useState(null);

    const sendPost = (e) => {
        e.preventDefault();

        if (!inputRef.current.value) return;

        db.collection("posts").add({
            message: inputRef.current.value,
            name: session.user.name, 
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(doc => {
            if(imageToPost){
                const uploadTask = storage
                .ref(`posts/${doc.id}`)
                .putString(imageToPost, 'data_url')
                
                removeImage();

                uploadTask.on("state_change", 
                null, 
                error => console.error(error), 
                () => {
                    //When upload completes
                    storage.ref(`posts/${doc.id}`).getDownloadURL().then(url => {
                        db.collection('posts').doc(doc.id).set({
                            postImage: url
                        }, 
                        { 
                            merge: true }
                        );
                    })
                })
            }
        })

        inputRef.current.value = "";
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
             reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setImagetoPost(readerEvent.target.result)
        }
    }

    const removeImage = () => {
        setImagetoPost(null);
    }

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md
    text-gray-500 font-medium mt-6'>
        <div className='flex space-x-4 p-4 items-center'>
            <Image 
            className="rounded-full"
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
            />
            <form className='flex flex-1'>
                <input className='rounded-full h-12 bg-gray-100 flex-grow 
                px-5 focus:outline'
                 type="text"
                 ref={inputRef} 
                 placeholder={`Whats on your mind, ${session.user.name}?`}/>
                 <button hidden type='submit' onClick={sendPost}>
                     Submit
                 </button>
            </form>
            {imageToPost && (
                <div className='flex flex-col filter
                hover:brightness-110 transition duration-150 transform hover:scale-105
                cursor-pointer'>
                    <img onClick={removeImage} className='h-10 object-contain' src={imageToPost} alt="" />
                </div>
            )}
        </div>
        <div className='flex justify-evenly p-3 border-t'>
            <div className='inputIcon'>
                <VideoCameraIcon className='h-7 text-red-500'/>
                <p className='text-xs sm:text-sm xl:text-base'>
                    Live Video
                </p>
            </div>
            <div onClick={() => filePickerRef.current.click()} className='inputIcon'>
            <EmojiHappyIcon className='h-7 text-green-400'/>
                <p className='text-xs sm:text-sm xl:text-base'>
                    Photo/Video
                </p>
                <input ref={filePickerRef}
                onChange={addImageToPost}  
                type="file" 
                hidden
                />
            </div>
            <div className='inputIcon'>
            <EmojiHappyIcon className='h-7 text-yellow-300'/>
                <p className='text-xs sm:text-sm xl:text-base'>
                    Feeling/Activity
                </p>
            </div>
        </div>
    </div>
  )
}

export default InputBox