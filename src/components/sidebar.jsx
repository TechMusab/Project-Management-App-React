/* eslint-disable react/prop-types */
import Createprojectbutton from "./createprojectbutton";
export default function Sidebar({ handleproject, projects,handleprojectclick}) {
  return (
    <div className="h-screen w-4/12 bg-slate-700 box-border pt-4 pl-5 ">
      <h1 className="text-white text-4xl mb-10">Project Management App</h1>
      <Createprojectbutton handleproject={handleproject}></Createprojectbutton>
      <h1 className="text-white text-xl mt-10">Your Projects</h1>
      {projects.map((project,index) => {
        return <h2 onClick={()=>handleprojectclick(index)}     className="text-white text-2xl bg-red-700 flex justify-center items-center rounded-lg px-4 py-2 mt-7 cursor-pointer"  style={{ width: 'fit-content' }} key={index}>{project.title}</h2>
      })}
    </div>
  );
}
