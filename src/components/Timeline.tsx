import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
const timelineData = [
  {
    date: '1 Aug, 2023',
    events: [
      {
        title: 'Created "Preline in React" task',
        description: 'Find more detailed instructions here.',
        avatar: 'https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80',
        author: 'James Collins',
      },
      {
        title: 'Release v5.2.0 quick bug fix ',
        avatar: 'https://images.unsplash.com/photo-1606788075760-d4fe6421eaf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        author: 'Alex Gregarov',
      },
      {
        title: 'Marked "Install Charts" completed',
        description: 'Finally! You can check it out here.',
        avatar: 'https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80',
        author: 'James Collins',
      },
    ],
  },
  {
    date: '31 Jul, 2023',
    events: [
      {
        title: 'Take a break ',
        description: 'Just chill for now... ',
        author: 'Tristan',
        avatar: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Marked "Install Charts" completed',
        description: 'Finally! You can check it out here.',
        avatar: 'https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80',
        author: 'James Collins',
      },
      {
        title: 'Marked "Install Charts" completed',
        description: 'Finally! You can check it out here.',
        avatar: 'https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80',
        author: 'James Collins',
      },
    ],
  },
];

const Timeline= () => {
  const [showOlder, setShowOlder] = useState(false);
  
  const handleShowOlder = () => {
    setShowOlder(!showOlder);
  };
  timelineData.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA; 
  });
  return (
    <>
    {timelineData.slice(0, showOlder ? timelineData.length : 1).map((timeline, k)=>(
      <TimelineItem key={k} item={timeline}/>
    ))}
  <div className="ps-[7px] flex gap-x-3">
        <button
          type="button"
          className="hs-collapse-toggle hs-collapse-open:hidden text-start inline-flex items-center gap-x-1 text-sm text-blue-600 font-medium decoration-2 hover:underline focus:outline-none focus:underline dark:text-blue-500"
          onClick={handleShowOlder}
        >
          <svg
            className="shrink-0 size-3.5"
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
            <path d="m6 9 6 6 6-6" />
          </svg>
          {showOlder ? 'Show less' : 'Show older'}
        </button>
      </div>
  </>
  );
};

export default Timeline;
