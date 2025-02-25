import "./App.css";
import Home from "./routes/Home/Home";
import { Routes, Route } from "react-router";
import ViewEmployee from "./routes/Employees/ViewEmployee";
import { useState } from "react";
import Layout from "./Layout/Layout";

import { EMPLOYEES } from "./utils/constants";

function App() {
  const [employees, setEmployees] = useState(EMPLOYEES);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <Routes>
          <Route path="/" element={<Home employees={employees} />} />
          <Route
            path="/employee/:id"
            element={
              <ViewEmployee
                employees={employees}
                updateEmployees={(updatedEmployeesInfo) =>
                  setEmployees(updatedEmployeesInfo)
                }
              />
            }
          />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
