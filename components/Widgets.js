import { SearchIcon }from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon }from '@heroicons/react/solid'
import Contact from "../components/Contact";

const contacts = [
    {
        name: "Claude Giroux",
        src: "https://cms.nhl.bamgrid.com/images/photos/332248628/1024x576/cut.jpg",
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
    },
    {
        name: "Jeff Bezos",
        src: "https://links.papareact.com/k2j",
    },
    {
        name: "George Washington",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/1200px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
    },
    {
        name: "Alf",
        src: "https://hbomax-images.warnermediacdn.com/images/GYbCHWwbQpcPCwgEAAAJd/tileburnedin?size=1280x720&partner=hbomaxcom&v=d09ca92fabad5f2222e9f3cac7dfba7c&language=en-us&host=art-gallery.api.hbo.com&w=Infinity",
    },
    {
        name: "James Bond",
        src: "https://nypost.com/wp-content/uploads/sites/2/2022/03/GettyImages-126264978.jpg?quality=80&strip=all&w=1024"
    }
]


function Widgets() {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
        <div className='flex justify-between items-center text-gray-500'>
            <h2 className="text-xl">Contacts</h2>
            <div className="flex space-x-2">
                <VideoCameraIcon className='h-6'/>
                <SearchIcon className='h-6'/>
                <DotsHorizontalIcon className='h-6'/>
            </div>      
        </div>
        {contacts.map(contact => {
            return(
                <Contact key={contact.src} src={contact.src} name={contact.name}/>
            )
        })}
    </div>
  )
}

export default Widgets