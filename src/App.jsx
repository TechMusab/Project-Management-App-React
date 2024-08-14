import { useState } from "react";
import Projectpage from "./components/projectpage";
import Sidebar from "./components/sidebar";
import { project } from "./Data/project";
function App() {
  const [isprojectselected, setisprojectselected] = useState(false);
  const [projects, setprojects] = useState(project);
  const [myproject, setprojectclick] = useState(null);
  const [count, setCount] = useState(0);
  const handleproject = () => {
    setisprojectselected(true);
  };
  const addprojectdata = (title, details) => {
    if(title=="" || details==""){
      return;
    }
    setprojects((prev) => [
      ...prev,
      {
        counter: count + 1,
        title: title,
        details: details,
        items: [],
      },
    ]);
    setCount(count + 1);
  };
  const handleprojectclick = (index) => {
    setisprojectselected(false);
    setprojectclick(projects.filter((_, i) => i === index));
  };
  const handledeleteproject = (count) => {
    setprojects((prev) => prev.filter((project) => project.counter !== count));
    setisprojectselected(true);
  };
  const additems = (value, count) => {
    if(value===""){
      return;
    }
    const itemsproject = projects.filter(
      (project) => project.counter === count
    );
    itemsproject[0].items.push(value);
    setprojectclick(itemsproject);
  };
  const deleteitem=(index,count)=>{
    const itemsproject = projects.filter(
      (project) => project.counter ===count
    );
    itemsproject[0].items.splice(index,1)
    setprojectclick(itemsproject);
  }
  return (
    <div className="w-screen h-screen flex">
      <Sidebar
        projects={projects}
        handleproject={handleproject}
        handleprojectclick={handleprojectclick}
      />
      <Projectpage
        isprojectselected={isprojectselected}
        handleproject={handleproject}
        addprojectdata={addprojectdata}
        myproject={myproject}
        handledeleteproject={handledeleteproject}
        additems={additems}
        deleteitem={deleteitem}
      />
    </div>
  );
}

export default App;
