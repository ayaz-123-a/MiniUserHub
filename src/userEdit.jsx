import { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams,NavLink } from 'react-router';

const UserEdit=()=>{
const Navigate=useNavigate()
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const {id}=useParams()
useEffect(()=>{
    getData()
},[])


const url="http://localhost:3000/users/"+id
const getData=async()=>{
    let response=await fetch(url)
    response=await response.json();
    setName(response.name)
    setEmail(response.email)
}

const updateData= async()=>{
    let response=await fetch(url,{
        method:"PUT",
        body:JSON.stringify({name,email})
    })
    response= await response.json()
    if(response){
        alert("user updated successfully")
        Navigate("/")
    }

}
    
return(
    <>
    <h1 style={{marginTop:"100px"}}>Edit UserList</h1>
    <div style={{marginTop:"20px"}}>
        <label htmlFor="name">Name</label> &nbsp;
         <input  type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>  <br />
       <br />< label htmlFor="email"> Email</label> &nbsp;
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" />
        <br />
       <br />
        <Button color="primary" onClick={updateData}>Update</Button>
       </div>
       <div  style={{marginTop:"20px"}}>
       <NavLink to={"/"} style={{marginTop:"200px",textDecoration:"none",border:"10px", borderRadius:"10px",backgroundColor:"black",fontSize:"12px",padding:"10px",textAlign:"center",color:"white"}}>Go To Home</NavLink>
       </div>
    </>
)
}
export default UserEdit