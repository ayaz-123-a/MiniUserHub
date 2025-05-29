import { useState } from "react"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";
const UserAdd = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const Navigate=useNavigate()

    const userAdding= async()=>{
        console.log(name,email)
        if(name=="" || email==""){
            alert("please fill all the fields")
            return
        }
        const url="http://localhost:3000/users"
        let response=await fetch(url,{
            method:"POST",
            body:JSON.stringify({name,email})

        })

        response= await response.json()
        if(response){
            alert("user sucessfully added")
            Navigate("/")
        }
    }

    return(
        <>
        <h1>Adding user</h1>
        <label htmlFor="name"> Name </label> &nbsp;
        <input  type="text" required title="please fill this field" onChange={(event)=>setName(event.target.value)} name="name" placeholder="Enter your name"/>  <br />
       <br />< label htmlFor="email">  Email </label> &nbsp;
        <input type="email" onChange={(event)=>setEmail(event.target.value)} name="email" placeholder="Enter your email" />
        <br />
       <br />
       <Button color="primary" onClick={userAdding}>Add</Button>
        </>
    )
}
export default UserAdd