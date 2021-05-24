import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import QuestionItem from "./QuestionItem";


function App() {
  const [page, setPage] = useState("List");
  const [listData, setListData] = useState([])
  const[refresh,setRefresh]=useState(false)
  const[viewQez,setviewQez]=useState({})

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(json => setListData(json))
  },[page,refresh])

  function deleteHandle(e) {
    
    fetch(`http://localhost:4000/questions/${e.target.name}`, { method: 'DELETE' })
    .then((res) => res.json())
    .then (()=>{
      const updateList=listData.filter((x)=>x.id!==e.target.name)
      setListData(updateList)
      setRefresh(!refresh)
    })
  }
 
  function handlePatch(e){
    // console.log(e.target.name);
  
    // fetch(`http://localhost:4000/questions/${e.target.name}`, { method: 'GET' })
    // .then((res) => res.json())
    // .then (json=>setListData(json))
    // setRefresh(!refresh)
    
  }




  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList populateList={listData} deleteHandle={deleteHandle} handlePatch={handlePatch}/>}
      {/* <QuestionItem question={e}/> */}
    </main>
  );
}

export default App;
