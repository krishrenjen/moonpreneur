"use client";
import { ReactNode, useState } from "react";
import clsx from "clsx";
import ReserveSeatForm from "./ReserveSeatForm";

export default function ProgramSection({ className, tabs }: { className?: string; tabs: string[] | ReactNode[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={clsx("max-w-md shadow-lg", className)}>
      <div className="flex justify-start bg-white rounded-t-md px-2 py-2">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={clsx("px-6 py-2 text-sm font-medium w-full rounded-md text-black", idx === activeIndex ? "bg-gray-200 cursor-default" : "cursor-pointer")}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="rounded-b-md py-2 bg-white">
        <ReserveSeatForm className="!shadow-none" calloutText="" />
      </div>
    </div>
  );
}
