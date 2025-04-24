import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import EventCalender from "@/components/EventCalender"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
    {/* {LEFT} */}
    <div className="w-full lg:w-2/3 flex flex-col gap-8">
    {/* {Usercards} */}
    <div className="flex gap-4 justify-space flex-wrap">
      <UserCard type="student"/>
      <UserCard type="teacher"/>
      <UserCard type="parent"/>
      <UserCard type="staff"/>
    </div>

    {/* {middlechart} */}
    <div className="flex gap-4 flex-col lg:flex-row">
    {/* {CountChart} */}
    <div className="w-full lg:w-1/3 h-[450px]">
    <CountChart/>
    </div>
    {/* {attendance chart} */}
    <div className="w-full lg:w-2/3 h-[450px]">
    <AttendanceChart/>
    </div>
    </div>

    {/* {bottomchart} */}
    <div className="w-full h-[500px]">
    <FinanceChart/>
    </div>
    </div>
    {/* {RIGHT} */}
    <div className="w-full lg:w-1/3 flex flex-col gap-8">
    <EventCalender/>
    <Announcements/>
    </div>
    </div>
  )
}

export default AdminPage