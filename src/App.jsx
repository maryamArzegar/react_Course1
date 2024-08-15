import { useState } from "react";
import "./App.css";
import FirstLoad from "./components/FirstLoad";
import LoadedProjects from "./components/LoadedProjects";
const projects = [
  {
    _id: 1,
    title: "سفر آنلاین",
    status: "CLOSED",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: 10000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2021-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 2,
    title: "توسعه سایت ",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 2,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-08T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  //  خودتون میتونید دیتاهای دیگه رو اضافه کنید.
];

function App() {
  const [isLoaded,setIsLoaded]=useState(false)  
  const [selectedStatus,setSelectedStatus]=useState(projects)
  const [select,setSelect]=useState("")

  const handlerLoadProjects=()=>{
    setIsLoaded(!isLoaded)
  }
  const handleSelectedStatus=(e)=>{
    const selected=projects.filter(pro=> pro.status.includes(e.target.value))    
    setSelectedStatus(selected)
    setSelect(e.target.value)    
  }
  
  return(
    <div>
      <FirstLoad 
      onLOadProjects={handlerLoadProjects} 
      isLoaded={isLoaded} 
      handleSelectedStatus={handleSelectedStatus}
      select={select}
      />
      {isLoaded?<LoadedProjects projects={selectedStatus}/>:""}
    </div>
  )
}

export default App;
