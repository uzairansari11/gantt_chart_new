import React, { useState } from "react";
import { Chart } from "react-google-charts";

// Reusable Gantt Chart Component
const GanttChart = ({ title, mainTaskRow, relatedRows }) => {
  const [showRelatedTasks, setShowRelatedTasks] = useState(false);

  const handleMainTaskClick = () => {
    setShowRelatedTasks((prev) => !prev);
  };

  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ];

  // Get the current date
  const currentDate = new Date();

  // Format relatedRows, replacing null end dates with the current date
  const formattedRelatedRows = relatedRows.map((row) => {
    // Destructure the row
    const [
      id,
      name,
      resource,
      startDate,
      endDate,
      duration,
      percentComplete,
      dependencies,
    ] = row;

    // Use current date if endDate is null
    const endDateValue = endDate === null ? currentDate : endDate;

    return [
      id,
      name,
      resource,
      startDate,
      endDateValue,
      duration,
      percentComplete,
      dependencies,
    ];
  });

  const data = [
    columns,
    ...mainTaskRow, // Always show the main task row
    ...(showRelatedTasks ? formattedRelatedRows : []), // Conditionally show related tasks
  ];

  const options = {
    height: showRelatedTasks ? 480 : 50, // Dynamic height based on related task visibility
    gantt: {
      trackHeight: 50, // Adjust the row height
    },
    hAxis: {
      format: "dd-MM-yyyy", // Custom date format
      gridlines: {
        color: "#e0e0e0", // Subtle gridlines
      },
    },
  };

  return (
    <div>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "left",
        }}
      >
        <p
          onClick={handleMainTaskClick}
          style={{ cursor: "pointer", color: "blue" }}
        >
          {title} (Click to {showRelatedTasks ? "hide" : "show"} related
          departments)
        </p>
      </div>

      <div
        style={{
          width: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Chart
          chartType="Gantt"
          width="90%"
          height="100%"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default GanttChart;
