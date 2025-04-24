"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "j ssdkdnikmddmdwwd",
    time: "12.00 pm - 2:00 pm",
    description: "lorem lorem dolor sit amet lorem lorem amet sit col",
  },
  {
    id: 2,
    title: "j ssdkdnikmddmdwwd",
    time: "12.00 pm - 2:00 pm",
    description: "lorem lorem dolor sit amet lorem lorem amet sit col",
  },
  {
    id: 3,
    title: "j ssdkdnikmddmdwwd",
    time: "12.00 pm - 2:00 pm",
    description: "lorem lorem dolor sit amet lorem lorem amet sit col",
  },
];

const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-DSky even:border-t-DYellow" key={event.id}>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-xs text-gray-400">{event.time}</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalender;
