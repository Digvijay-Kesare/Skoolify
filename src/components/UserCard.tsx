import Image from "next/image";
const UserCard = ({type}:{type:string}) => {
    return (
        <div className="rounded-2xl odd:bg-DPurple bg-DYellow p-4 flex-1 min-w-[130px]">
            <div className="flex justify-between items-center">
                <span className="rounded-full py-1 px-2 bg-white text-[10px] text-green-600 font-semibold">2025/25</span>
                <Image src="/more.png" alt="" width={20} height={20}/>
            </div>
        
        <h1 className="text-2xl font-semibold my-4">1,234</h1>
        <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
        </div>
    )
}

export default UserCard;