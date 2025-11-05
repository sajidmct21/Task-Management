import React, { useState } from "react";
import Cards from "./home/Cards";
import { IoAddCircle } from "react-icons/io5";
import InputData from "./home/InputData";

function AllTasks() {
  const [inputDiv, setInputDiv]= useState("hidden")
  return (
    <>
      <div>
        <div className="w-full flex justify-end px-4 py-2">
          <button onClick={()=>setInputDiv("fixed")} className="cursor-pointer">
            <IoAddCircle className="text-5xl text-gray-400 hover:text-gray-100 transition-all duration-300" />
          </button>
        </div>
        <Cards home={"true"} setInputDiv={setInputDiv} />
      </div>
      <InputData inputDiv={inputDiv} setInputDiv={setInputDiv} />
    </>
  );
}

export default AllTasks;
