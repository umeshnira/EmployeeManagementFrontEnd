import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const dummyEvents = [
  {
    allDay: false,
    end: new Date("May 10, 2020 11:13:00"),
    start: new Date("December 09, 2017 11:13:00"),
    title: "hi",
    resource: "project 1",
    titleAccessor: "test",
  },
];
const Calendar3 = (props) => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={[
          {
            title: "My event",
            allDay: false,
            start: new Date(2018, 0, 1, 10, 0), // 10.00 AM
            end: new Date(2018, 0, 1, 14, 0), // 2.00 PM
          },
        ]}
        step={60}
        view="week"
        // views={["week"]}
        min={new Date(2008, 0, 1, 9, 0)} // 8.00 AM
        max={new Date(2008, 0, 1, 17, 0)} // Max will be 6.00 PM!
        date={new Date(2018, 0, 1)}
        hideTimeIndicator={false}
        hideGutter={false}
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Calendar3;
