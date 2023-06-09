import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function User(){
  const [userInput,setUser]=useState({
    name:'',
    phone:''
  });
  const [verify,setVerify]=useState(false)
  const handleInput=(e)=>{
    e.persist();
    setUser({...userInput,[e.target.name]:e.target.value})
  }
  const save=(e)=>{
    e.preventDefault();
    if(userInput.name.length===0   || userInput.phone.length===0){
     setVerify(true)
     return false
    }
    const data={
      name:userInput.name,phone:userInput.phone
    }
    axios.post('/user/new',data).then((resp)=>{
      if(resp.data.status===200){
        setUser({...userInput,
          name:'',
          phone:''
        })
      }
    })
  }

  return(
    <div className="container col-md-4 offset-md-4 mt-5 shadow p-3 mb-5 bg-body rounded">
      <div className="row">
      <h4 className="bloat-end">
      <Link to="/user/all" className="btn btn-success float-end">all contact</Link>
      </h4>
        <form onSubmit={save}>
          <div className="form-group mt-2">
            <input type="text" className="form-control" onChange={handleInput} name="name" value={userInput.name} placeholder="name contact"/>
            {verify && userInput.name.length <=0 ? <span className="text-danger">digite your name phone</span> :''}
           </div>
          <div className="form-group mt-2">
            <input type="text" className="form-control" name="phone" onChange={handleInput} value={userInput.phone} placeholder="number phone"/>
            {verify && userInput.phone.length <=0 ? <span className="text-danger">digite your phone</span> :''}

          </div>
          <div className="form-group mt-2">
          <button type="submit" className="btn btn-sm btn-primary">save</button>
          </div>
        </form>
      </div>
    </div>
  )
}