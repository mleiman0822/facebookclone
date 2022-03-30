import React from 'react'
import StoryCard from './StoryCard'

const stories = [
    {
        name: "Matthew Leiman",
        src: "https://cms.nhl.bamgrid.com/images/photos/332248628/1024x576/cut.jpg",
        profile: "https://queryon.com/wp-content/uploads/2021/10/Matt.png"
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Jeff Bezos",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p"
    },
    {
        name: "George Washington",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/1200px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
        profile: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2010/4/18/1271630795169/George-Washington-001.jpg?width=620&quality=85&auto=format&fit=max&s=d1e5b972961a28270e3b94f8c3ed5bfd"
    },
    {
        name: "Alf",
        src: "https://hbomax-images.warnermediacdn.com/images/GYbCHWwbQpcPCwgEAAAJd/tileburnedin?size=1280x720&partner=hbomaxcom&v=d09ca92fabad5f2222e9f3cac7dfba7c&language=en-us&host=art-gallery.api.hbo.com&w=Infinity",
        profile: "https://variety.com/wp-content/uploads/2018/08/alf.jpg"
    },
]


function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
        {stories.map(story => (
        <StoryCard key={story.src} name={story.name}
        src={story.src}
        profile={story.profile} 
        />        
        ))}
    </div>
  )
}

export default Stories