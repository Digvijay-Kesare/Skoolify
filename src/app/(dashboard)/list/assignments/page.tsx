import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role,assignmentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Assignment = {
  id: number;
  subject: string;
  class: number;
  teacher:number;
  dueDate:string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "DueDate",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const AssignmentListPage = () => {
  const renderRow = (item: Assignment) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-DPurplelight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/classs/${item.id}`}>
            <button className="w-7 h-7 flex justify-center items-center rounded-full bg-DSky">
              <Image src="/edit.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex justify-center items-center rounded-full bg-DPurple">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 mt-0 m-4">
      {/* {top} */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Assignments</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto ml-auto">
          <TableSearch />
        </div>
        <div className="pl-1.5 flex items-center gap-2 self-end">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-DYellow">
            <Image src="/filter.png" alt="" width={14} height={14} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-DYellow">
            <Image src="/sort.png" alt="" width={14} height={14} />
          </button>
          {role === "admin" && (
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-DYellow">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          )}
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
      {/* {list} */}
      <Pagination />
    </div>
  );
};

export default AssignmentListPage;
