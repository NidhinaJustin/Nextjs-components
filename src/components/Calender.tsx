import React, { useEffect, useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    setSelectedDate(null);
  }, [currentDate]);

  const handleSelectPrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleSelectNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleSelectDate = (day: number) => {
    const newSelectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const today = new Date();

    if (newSelectedDate < today) {
      return;
    }

    setSelectedDate(newSelectedDate);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = [];
  for (let i = 0; i < 10; i++) {
    years.push(2023 + i);
  }
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const startDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const daysArray = Array(startDay)
    .fill(null)
    .concat([...Array(daysInMonth)].map((val, i) => i + 1));
  return (
    <>
    <div className="p-3 bg-white space-y-0.5">

      <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
        <div className="col-span-1">
          <button
            type="button"
            className="flex justify-center items-center text-black hover:bg-gray-200 rounded-full focus:outline-none"
            onClick={handleSelectPrevMonth}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        </div>
        <div className="col-span-3 flex justify-center items-center gap-x-1">
          <select
            className="text-black bg-white border border-gray-300"
            value={currentDate.getMonth()}
            onChange={(e) =>
              setCurrentDate(
                new Date(currentDate.getFullYear(), parseInt(e.target.value), 1)
              )
            }
          >
            {monthNames.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
          <span className="text-black">/</span>
          <select
            className="text-black bg-white border border-gray-300"
            value={currentDate.getFullYear()}
            onChange={(e) =>
              setCurrentDate(
                new Date(parseInt(e.target.value), currentDate.getMonth(), 1)
              )
            }
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1 flex justify-end">
          <button
            type="button"
            className="flex justify-center items-center text-black hover:bg-gray-200 rounded-full focus:outline-none"
            onClick={handleSelectNextMonth}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex pb-1.5">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
          <span key={day} className="w-10 text-center text-sm text-gray-500">
            {day}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {daysArray.map((day, index) => {
          if (day === null) {
            return <div key={index} />;
          }
          const isSelected =
            selectedDate &&
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getFullYear() === currentDate.getFullYear();

          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const isPastDate =
            new Date(currentDate.getFullYear(), currentDate.getMonth(), day) <
            today;

          return (
            <button
              onClick={() => handleSelectDate(day)}
              key={index}
              className={`m-px flex justify-center items-center border border-gray-300 rounded-full text-sm 
          ${isSelected ? "bg-blue-600 text-white" : "text-black"} 
          ${
            isPastDate
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-600 hover:text-white"
          }
        `}
              disabled={isPastDate}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>

   {selectedDate &&<h2 className="text-white p-3">Selected Date: {selectedDate ? selectedDate.toLocaleDateString() : "None"}</h2> } 

</>
  );
};

export default Calendar;
