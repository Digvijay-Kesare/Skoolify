"use client";
import Image from "next/image";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    Count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    Count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    Count: 53,
    fill: "#C3EBFA",
  },
  
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="" />
      </div>
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="Count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/maleFemale.png" alt="" width={50} height={50}/>
      </div>
      <div className="flex justify-center gap-16 mt-4">
        {/* Boys */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-4 h-4 bg-DSky rounded-full"></div>
          <h1 className="font-bold text-lg">1,234</h1>
          <h2 className="text-xs text-gray-400">Boys (55%)</h2>
        </div>

        {/* Girls */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-4 h-4 bg-DYellow rounded-full"></div>
          <h1 className="font-bold text-lg">1,234</h1>
          <h2 className="text-xs text-gray-400">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
