// app/timeline/page.tsx
import Timeline from "@/components/Timeline";
import MainLayout from "@/layouts/MainLayout";
import React from 'react';

const TimelinePage: React.FC = () => {

  return (
    <>
      <h1 className="pb-3 text-xl">Timeline</h1>
      <Timeline />
    </>
  );
};

export default TimelinePage;
