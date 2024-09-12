import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./page/Theme/Layout";
import Task1 from "./page/Task1";
import Task3 from "./page/Task3";
import LogicalTask from "./page/LogicalTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Task1 />} />
          <Route path="/logicalTask" element={<LogicalTask />} />
          <Route path="/task3" element={<Task3 />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
