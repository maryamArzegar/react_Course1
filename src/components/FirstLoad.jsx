const status=[
  {
    id:1,
    title:"همه",
    value:""
  },
  {
    id:2,
    title:"باز",
    value:"OPEN"
  },
  {
    id:3,
    title:"بسته",
    value:"CLOSED"
  }
]
function FirstLoad({onLOadProjects,isLoaded,handleSelectedStatus,select}) { 
  return (
    <div className="m-10">
    <div className="flex justify-between">
    <h1 className="text-3xl text-slate-600 text-right">لیست پروژه ها</h1>
       {isLoaded?<FilterStatusProject handleSelectedStatus={handleSelectedStatus} select={select}/>:""}
    </div>
       <button onClick={onLOadProjects} className={`bg-blue-700 rounded-md py-2 px-10 text-white m-auto mt-28 ${isLoaded? `hidden`:``}`}>نشان دادن پروژه ها</button>
    </div>
    
)

}
function FilterStatusProject({handleSelectedStatus,select}){
  return(
    <div className="flex gap-x-10">
        <div className="flex items-center px-3">
          <span className="px-3">وضعیت</span>
          <div className="flex bg-white px-1 py-2 rounded-lg" onClick={handleSelectedStatus}>
            {status.map(s=>{
              return(
                <button className={`px-5 rounded-lg ${s.value===select?"bg-blue-500":""}`} key={s.id} value={s.value}>{s.title}</button>
              )
            })}
          </div>
        </div>
        <FilterSortProject/>
        <FilterProject/>
       </div>
  )
}
function FilterSortProject(){
  return(
    <div>
      <select name="" id="" className="p-1 rounded-lg w-36 outline-none">
        <option value="newest">مرتب سازی(جدیدترین)</option>
        <option value="oldest"> مرتب سازی(قدیمی ترین)</option>
      </select>
    </div>
  )
}
function FilterProject(){
  return(
    <div>
    <select name="" id="" className="p-1 rounded-lg w-36 outline-none">
      <option value="All">دسته بندی(همه)</option>
    </select>
  </div>
  )
}
export default FirstLoad