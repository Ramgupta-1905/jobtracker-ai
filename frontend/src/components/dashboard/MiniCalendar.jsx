import { useState } from "react";

export default function MiniCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  const today = new Date();
  const isCurrentMonth =
    today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear();

  // Sample Events
  const events = [
    { day: 7, type: "interview" },
    { day: 12, type: "assessment" },
    { day: 18, type: "deadline" },
    { day: 26, type: "interview" },
    { day: 28, type: "deadline" },
    { day: 30, type: "assessment" },
  ];

  const eventColors = {
    interview: "bg-green-500",
    assessment: "bg-orange-500",
    deadline: "bg-red-500",
  };

  const totalCells = 42;
  const daysArray = [];
  for (let i = 0; i < totalCells; i++) {
    const dayNumber = i - firstDayOfMonth + 1;
    if (dayNumber > 0 && dayNumber <= daysInMonth) {
      daysArray.push({ day: dayNumber, currentMonth: true });
    } else if (dayNumber <= 0) {
      const prevMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
      daysArray.push({ day: prevMonthDays + dayNumber, currentMonth: false });
    } else {
      daysArray.push({ day: dayNumber - daysInMonth, currentMonth: false });
    }
  }

  return (
    <div className="bg-white rounded-xl p-4 shadow-md w-[300px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">
          📅 {month} {year}
        </h2>
        <div className="flex gap-1">
          <button
            onClick={previousMonth}
            className="rounded-md p-1 hover:bg-gray-200 transition text-gray-700 text-sm"
          >
            ←
          </button>
          <button
            onClick={nextMonth}
            className="rounded-md p-1 hover:bg-gray-200 transition text-gray-700 text-sm"
          >
            →
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="mt-3 grid grid-cols-7 text-center text-xs font-medium text-gray-500">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="mt-2 grid grid-cols-7 gap-1">
        {daysArray.map(({ day, currentMonth }, index) => {
          const dayEvents = events.filter((event) => event.day === day);
          return (
            <div
              key={index}
              className={`h-8 rounded-md flex flex-col items-center justify-center cursor-pointer transition ${
                currentMonth
                  ? isCurrentMonth && day === today.getDate()
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-200"
                  : "text-gray-400"
              }`}
            >
              <span className="text-xs">{day}</span>
              <div className="mt-0.5 flex items-center justify-center gap-0.5 min-h-[4px]">
                {dayEvents.map((event, idx) => (
                  <span
                    key={idx}
                    className={`w-[5px] h-[5px] rounded-full ${
                      eventColors[event.type] || "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-3">
        <h3 className="text-xs font-semibold text-gray-900 mb-1">Legend</h3>
        <div className="flex gap-3 text-xs text-gray-700">
          {Object.entries(eventColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${color}`} />
              <span className="capitalize">{type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
