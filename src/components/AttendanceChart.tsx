"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", present: 40, absent: 60 },
  { name: "Tue", present: 30, absent: 50 },
  { name: "Wed", present: 85, absent: 10 },
  { name: "Thu", present: 85, absent: 19 },
  { name: "Fri", present: 70, absent: 48 },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full w-full flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data} barSize={20}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} />
            <Tooltip
              contentStyle={{ borderRadius: "10px", borderColor: "Light" }}
            />
            <Legend
              align="left"
              verticalAlign="top"
              height={36}
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <Bar
              dataKey="present"
              fill="#FAE27C"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="absent"
              fill="#C3EBFA"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
