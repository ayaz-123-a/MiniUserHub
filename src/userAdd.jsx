import { useState } from "react"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";
const UserAdd = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const Navigate=useNavigate()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (event) => {
        const value= event.target.value;
        setEmail(value)
    }

    const userAdding= async()=>{
        if(name=="" || email==""){
            alert("please fill all the fields")
            return
        }

    if(emailRegex.test(email) === false){
            alert("Please enter a valid email address");
            return;
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
        <input type="email" onChange={handleChange} name="email" placeholder="Enter your email" />
        <br />
       <br />
       <Button color="primary" onClick={userAdding}>Add</Button>
        </>
    )
}
export default UserAdd