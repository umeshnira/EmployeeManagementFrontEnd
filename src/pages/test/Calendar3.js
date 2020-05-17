import React from "react";
import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

const groups = [
  {
    id: 1,
    title: "Project 1",
    height: 60,
  },
  {
    id: 2,
    title: "Project 2",
    height: 60,
  },
];

const items = [
  {
    id: 1,
    group: 1,
    title: "Task 1",
    start_time: moment("05-15-2020"),
    end_time: moment("05-15-2020").add(1, "day").toDate(),
  },
  {
    id: 2,
    group: 2,
    title: "Task 1",
    start_time: moment("05-14-2020"),
    end_time: moment("05-14-2020").add(1, "day").toDate(),
  },
  {
    id: 3,
    group: 1,
    title: "Task 2",
    start_time: moment("05-16-2020"),
    end_time: moment("05-16-2020").add(1, "day").toDate(),
  },
];

const Calendar3 = (props) => {
  return (
    <div style={{ width: "80vw" }}>
      Rendered by react!
      <Timeline
        groups={groups}
        items={items}
        // timeSteps={{ day: 1 }}
        // unit="day"
        defaultTimeStart={moment().add(-12, "hour")}
        defaultTimeEnd={moment().add(12, "hour")}
        // visibleTimeStart={moment().add(-12, "hour")}
        // visibleTimeEnd={moment().add(12, "hour")}
      />
    </div>
  );
};

export default Calendar3;
