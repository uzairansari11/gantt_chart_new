import "./App.css";
import GanttChart from "./GanttChart";
import {
  mainTaskRow,
  mainTaskRow1,
  mainTaskRow2,
  mainTaskRow3,
  relatedRows,
  relatedRows1,
  relatedRows2,
  relatedRows3,
} from "./data";
function App() {
  return (
    <div>
      <GanttChart
        title={`Work Order ${mainTaskRow[0][1]}`}
        mainTaskRow={mainTaskRow}
        relatedRows={relatedRows}
      />
      <GanttChart
        title={`Work Order ${mainTaskRow1[0][1]}`}
        mainTaskRow={mainTaskRow1}
        relatedRows={relatedRows1}
      />
      <GanttChart
        title={`Work Order ${mainTaskRow2[0][1]}`}
        mainTaskRow={mainTaskRow2}
        relatedRows={relatedRows2}
      />
      <GanttChart
        title={`Work Order ${mainTaskRow3[0][1]}`}
        mainTaskRow={mainTaskRow3}
        relatedRows={relatedRows3}
      />
    </div>
  );
}

export default App;
