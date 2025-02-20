import "./App.css";
import Footer from "./routes/Layout/Footer";
import Header from "./routes/Layout/Header";
import Home from "./routes/Main/Home";
import { Routes, Route } from "react-router";
import ViewEmployee from "./routes/Main/ViewEmployee";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 12345,
      name: "Arun",
      gender: "Male",
      age: 28,
      emailId: "Arun@gmail.com",
      phone: 9848012345,
    },
    {
      id: 12346,
      name: "Stone",
      gender: "Female",
      age: 25,
      emailId: "Stone@gmail.com",
      phone: 9848013245,
    },
    {
      id: 12347,
      name: "Amul",
      gender: "Male",
      age: 32,
      emailId: "Ammul@gmail.com",
      phone: 9348123467,
    },
    {
      id: 12348,
      name: "Robbins",
      gender: "Male",
      age: 22,
      emailId: "Robbins@gmail.com",
      phone: 9842312345,
    },
    {
      id: 12349,
      name: "Magnum",
      gender: "Female",
      age: 21,
      emailId: "Magnum@gmail.com",
      phone: 9812748045,
    },
    {
      id: 12350,
      name: "Havor",
      gender: "Male",
      age: 34,
      emailId: "Havor@gmail.com",
      phone: 9836495585,
    },
    {
      id: 12351,
      name: "Natural",
      gender: "Female",
      age: 30,
      emailId: "Natural@gmail.com",
      phone: 9367492883,
    },
  ]);
  const details = [
    "Employee Id",
    "Name",
    "Gender",
    "Age",
    "Email Id",
    "Phone No",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home employees={employees} details={details} />}
        />
        <Route
          path="/employee/:id"
          element={
            <ViewEmployee employees={employees} setEmployees={setEmployees} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
