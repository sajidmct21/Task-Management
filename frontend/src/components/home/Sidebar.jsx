import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from "react-router-dom";
function Sidebar() {
  const data = [
    {
      title: "All Tasks",
      icon:<CgNotes />,
      link:'/'
    },
    {
      title: "Important Tasks",
      icon:<MdLabelImportant />,
      link:'/importanttasks'
    },
    {
      title: "Completed Task",
      icon:<FaCheckDouble />,
      link:'/completetasks'
    },
    {
      title: "Incomplete Tasks",
      icon:<TbNotebookOff />,
      link:'/incompletetasks'
    },
  ];
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">The Code Master</h2>
        <h4 className="mb-1 text-gray-400">sajidmct21@gmail.com</h4>
        <hr />
      </div>
      <div>
        {data.map((item, i) => (
          <Link to={item.link} className="my-2 flex gap-1 items-center hover:bg-gray-600 cursor-pointer p-2 rounded" key={i}>{item.icon}&nbsp;{item.title}</Link>
        ))}
      </div>
      <div>
        <button className="bg-gray-600 w-full p-2 rounded">Logout</button>
      </div>
    </>
  );
}

export default Sidebar;
