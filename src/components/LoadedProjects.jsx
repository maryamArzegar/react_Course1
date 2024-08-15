const tableHeader=[
  {id:1 ,title:"#"},
  {id:2 ,title:"عنوان پروژه"},
  {id:3 ,title:"بودجه"},
  {id:4 ,title:"ددلاین"},
  {id:5 ,title:"وضعیت"},
  {id:6 ,title:"عملیات"}
]
function LoadedProjects({projects}) {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-gray-300 flex p-2 justify-between " >
          {tableHeader.map((th)=>{
            return(
              <th className=" px-1 w-1/12 flex" key={th.id}>{th.title}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
            {projects.map((project,index)=>{
              return(
          <tr className="bg-gray-100 flex py-2 justify-between border-solid border-gray-300 border-2" key={project._id}>
          <td className="w-1/12 mr-3 flex ">{index+1}</td>
          <td className=" w-1/12 px-1 flex ">{project.title}</td>
          <td className=" w-1/12 px-1 flex ">{project.budget}</td>
          <td className="w-1/12 px-1 flex ">{new Date(project.deadline).toLocaleDateString("fa-IR")}</td>
          <td className={` w-1/12 px-1 flex ml-5 text-white justify-center rounded-xl ${project.status==="CLOSED"?"bg-red-600":"bg-green-500"}`}>
            {`${project.status==="CLOSED"?"بسته":"باز"}`}
            </td>
          <td className="w-1/12 px-1 flex ">عملیات</td>
                </tr>
              )
            })}
      </tbody>
    </table>
)
}

export default LoadedProjects


























//     <div className="flex-col">
//           <div className="flex bg-gray-300 py-2">
//     {tableHeader.map((th)=>{
//       return(
//         <span className="font-bold text-gray-700 justify-start bg-red-200 mx-3 w-2/12 text-right" >{th.title}</span>
//       )
//     })}
//     </div>
//       {projects.map((project)=>{
//         return(
//           <div className="flex bg-gray-100 p-2 border-solid border-gray-300 border-2n font-bold text-gray-700 ">
//           <span className="bg-fuchsia-300 mx-3 w-2/12 text-right">{project._id}</span>
//           <span className="bg-fuchsia-300 mx-3 w-2/12 text-right">{project.title}</span>
//           <span className="bg-fuchsia-300 mx-3 w-2/12 text-right">{project.budget}</span>
//           <span className="bg-fuchsia-300 mx-3 w-2/12 text-right">{new Date(project.deadline).toLocaleDateString("fa-IR")}</span>
//           <span className={`w-20 rounded-xl ${project.status==="CLOSED"?"bg-red-600":"bg-green-500"}`}>
//             {`${project.status==="CLOSED"?"بسته":"باز"}`}
//             </span>
//           <span className="bg-fuchsia-300 mx-3 w-2/12 text-right">عملیات</span>
//       </div>
//         )
//       })}
//     </div>