import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import AllTasks from "./components/AllTasks";
import ImportantTasks from "./components/ImportantTasks";
import CompletedTasks from "./components/CompletedTasks";
import IncompletedTasks from "./components/IncompletedTasks";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <div className="bg-gray-900 text-white h-screen p-2 relative">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<AllTasks />} />
            <Route path="/importanttasks" element={<ImportantTasks/>}/>
            <Route path="/completetasks" element={<CompletedTasks/>}/>
            <Route path="/incompletetasks" element={<IncompletedTasks/>}/>
          </Route>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
