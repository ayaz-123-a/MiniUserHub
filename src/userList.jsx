//studying loader

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import  Button from 'react-bootstrap/Button';
import { MoonLoader } from 'react-spinners';

const url="http://localhost:3000/users"
function UserList() {
const [userData,setUserData]=useState([])
const [loading,setLoading]=useState(false)

  useEffect(()=>{
    getData()
    setLoading(true)
  },[])
  

const getData=async()=>{
let response=await fetch(url)
response=await response.json()
setUserData(response)
setLoading(false)
}

const deleteData= async(id,name)=>{
let response=await fetch(url+"/"+id,{
  method:"DELETE"
})
response= await response.json()
if(response){
  alert(`${name} is Deleted Successfully`)
  getData()

}
}

const navigate=useNavigate()
const editPage=(id)=>{
navigate(`/edit/${id}`)
}

  return (
    <>
      <h1><b>User List</b></h1>
      {  
           !loading ?
        userData.map((user)=>
          <div key={user.id} style={{display:"flex", justifyContent:"center", width:"100%"}}>
        <div  style={{marginTop:"20px", padding:"25px", width:"650px",border:"1px solid black",alignItems:"flex-start", justifyContent:"space-around", display:"flex",flexDirection:"column"}}>
          <h3> <b>Name:</b> {user.name}</h3>
          <h3><b>Email:</b> {user.email}</h3>
         <h3>Action:<Button variant="danger" onClick={()=>{
          alert(`Are you sure you want to delete ${user.name}`)
          deleteData(user.id,user.name)
         }} > Delete </Button> <Button onClick={()=> editPage(user.id)}> Edit </Button></h3>
        </div></div>) 
        :<div style={{ display: "flex" ,justifyContent: "center", marginTop: "80px" }}>
                  <MoonLoader color="#19d12b" size={100}/>
                </div>
        }

    </>
  )
}

export default UserList
