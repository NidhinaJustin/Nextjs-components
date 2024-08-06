import React from "react";
import Image from 'next/image';
interface Event {
  title: string;
  description?: string;
  avatar: string ;
  author: string;
}

interface TimelineItem {
  date: string;
  events: Event[];
}
interface TimelineItemProps {
  item: TimelineItem;
}

const TimelineItem = ({ item }: TimelineItemProps) => {
  return (
    <>
      <div className="ps-2 my-2 first:mt-0">
        <h3 className="text-xs font-medium uppercase ">
          {item.date}
        </h3>
      </div>
      {item.events.map((event, k) => (
        <div key={k} className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full "></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold ">
              <svg
                className="shrink-0 size-4 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" x2="8" y1="13" y2="13"></line>
                <line x1="16" x2="8" y1="17" y2="17"></line>
                <line x1="10" x2="8" y1="9" y2="9"></line>
              </svg>
              {event.title}
            </h3>
            <p className="mt-1 text-sm ">
              {event.description}
            </p>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              <Image
                className="shrink-0 size-4 rounded-full"
                src={event?.avatar ?? ""}
                alt="Avatar"
                width={32} 
                height={32} 
              />
              {event.author}
            </button>
          </div>

        </div>
      ))}
    </>
  );
};
export default TimelineItem;
