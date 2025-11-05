import React from "react";
import { RxCross1 } from "react-icons/rx";

const InputData = ({inputDiv, setInputDiv}) => {
  return (
    <>
      <div className={`${inputDiv} top-0 left-0 bg-gray-800 opacity-50 h-screen w-full`}></div>
      <div className={`${inputDiv} top-0 left-0 flex justify-center items-center h-screen w-full`}>
        <div className="w-2/6 bg-gray-900 p-4 rounded">
          <div className="flex justify-end">
            <button className="text-2xl cursor-pointer" onClick={()=>{setInputDiv("hidden")}}>
              <RxCross1 />
            </button>
          </div>
          <input
            className=" bg-gray-700 px-3 py-2 rounded w-full mt-3"
            type="text"
            name="title"
            id=""
            placeholder="Title"
          />
          <textarea
            className="my-3 bg-gray-700 px-3 py-2 rounded w-full"
            name="desc"
            cols="30"
            rows="10"
            placeholder="Description"
          />
          <button className="px-3 py-2 bg-blue-400 rounded text-black text-xl cursor-pointer font-semibold">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
