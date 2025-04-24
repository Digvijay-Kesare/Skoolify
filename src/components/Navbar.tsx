import Image from "next/image"



const Navbar = () => {
    return(
        <div className="flex items-center justify-between p-4">
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-500 px-2">
                <Image src="/search.png" alt="Search" width={14} height={14} />
                <input className="width-[200] p-2 bg-transparent outline-none" type="text" placeholder="Search.."/>
            </div>
            <div className="w-full flex items-center gap-6 justify-end">
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    <Image src="/message.png" alt="Message" width={20} height={20}/>
                </div>
                <div className="flex items-center gap-6 justify-end">
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <Image src="/announcement.png" alt="Message" width={20} height={20}/>
                    <div className="absolute bg-purple-500 rounded-full w-5 h-5 -top-3 -right-3 flex items-center justify-center text-xs text-white">1</div>
                </div>
                <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">Digvijay</span>
                <span className="text-[10px] text-gray-500 text-right">Admin</span>
                </div>
                <Image className="rounded-full" src="/avatar.png" height={35} width={35} alt="avatar"/>
                </div>
                </div>
        </div> 
    )
}

export default Navbar