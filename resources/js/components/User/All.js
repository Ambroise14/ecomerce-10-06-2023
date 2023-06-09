import axios from "axios";
import { first, includes, last } from "lodash";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Role from "../Role";
import Swal from "sweetalert2";

export default function All(){

  const [User,setUser]=useState([]);
  const [DataFilter,setDataFilter]=useState([]);
  const [getId_user,setId]=useState(-1);
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [state_p,setState_p]=useState(0);
  //pagination

  const [Page,setPage]=useState(1);
  const [RecordPerPage,setRecord]=useState(2);
  const lastIndex=Page*RecordPerPage;
  const firstIndex=lastIndex-RecordPerPage;
  const records=User.slice(firstIndex,lastIndex);
  const nPage=Math.ceil(User.length/RecordPerPage);
  const Number=[...Array(nPage+1).keys()].slice(1);
  //auto
  useEffect(()=>{
    getUser();
  },[])

  function getUser(){
    axios.get('/user/get').then((resp)=>{
      if(resp.data.status===200){
        setUser(resp.data.users)
        setDataFilter(resp.data.users)
      }
    })
  }
  function handleInput(event){
    const Filter=event.target.value
    if(Filter.length > 0){
      const Filter=event.target.value
      const searchdata=User.filter((item)=>item.name.toLowerCase().includes(Filter) || item.name.toUpperCase().includes(Filter))
      setUser(searchdata)

    }else{
      setUser(DataFilter)
    }
    }
  //get only user
  function getOnly(id)
  {
    setId(id);
    axios.get(`/user/edit/${id}`).then((resp)=>{
      if(resp.data.status===200){
        setName(resp.data.phone.name);
        setPhone(resp.data.phone.phone);

      }
    })
  }
  //update user
  function update(e){
    e.preventDefault();
    axios.post('/user/update',{id:getId_user,name:name,phone:phone,status:state_p}).then((resp)=>{
      if(resp.data.status===200){
        setUser(resp.data.users)
        setId(-1);
      }
    })
  }
  function handleCheckbox(e){
    const {value,checked}=e.target;
    if(checked){
      setState_p(1)
    }else{
      setState_p(0) 
    }
  }

  function Canceled(){
    setId(-1);
  }
  function prev(){
    if(Page !==1){
      setPage(Page-1)
    }
  }
  function next(){
    if(Page !==nPage){
      setPage(Page+1)
    }
  }
  function change_p(id){
    setPage(id)
  }
  function Delete(id){
    Swal.fire({
      title: 'Do you want to delete ?',
      showCancelButton: true,
      confirmButtonText: 'Save',
      timerProgressBar: true,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios.get(`/user/delete/${id}`).then((resp)=>{
          if(resp.data.status===200){
           getUser();
    
          }
        })
      }
    })
  
  }
  return(
    <div className="container mt-5 shadow-sm p-3 mb-5 bg-body rounded">
      <div className="row">
       
       <div className="col-md-2">
         <Role/>
       </div>
       <div className="col-md-10">
       <div className="input-group">
       <input type="text" onChange={handleInput} className="form-control" placeholder="Search"/>
      <select className="form-select form-select" aria-label=".form-select-lg example"  onChange={(e)=>setRecord(e.target.value)} >
        <option value={RecordPerPage}>show per page</option>
        <option value="3">3</option>
        <option value="6">6 per page</option>
        <option value="20">20 per page</option>
      </select>
       </div>

      <form onSubmit={update}>
        <table className="table table-sm table-bordered mt-2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              records.map((a)=>(
                a.id===getId_user ?
                 <tr key={getId_user}>
                 <td><input type="text" value={getId_user} onChange={(e)=>setId(e.target.value)}/></td>
                  <td><input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></td>
                  <td><input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/></td>
                  <td><input type="checkbox" defaultChecked={a.status==="1" ? 'checked':""} onChange={handleCheckbox}/></td>
                  <td className="input-group">
                    <button type="button" onClick={()=>Canceled()} className="btn btn-sm btn-dark">Canceled</button>
                    <button type="submit" className="btn btn-sm btn-success float-end">Update</button>

                  </td>
                 </tr>
                 :
                 <tr key={a.id}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.phone}</td>
                  <td className={`${a.status==="1" ? 'bg-info text-white' :'bg-danger text-white'}`}>{a.status==="1" ? 'Actif' :'Desactiver'}</td>
                  <td className="input-group">
                    <button type="button" onClick={()=> Delete(a.id)} className="btn btn-sm btn-danger">Delete</button>
                    <button type="button" onClick={()=>getOnly(a.id)} className="btn btn-sm btn-success float-end">Edit</button>

                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        </form>
        <nav>
          <ul className="pagination">
          <li className="page-item">
            <a href="#" onClick={()=>prev()} className={`page-link`}>
              preview
            </a>
          </li>
          {
            Number.map((a,b)=>{
              return(
                <li className={`page-item ${Page ===a ? 'active' :''}`}>
                <a href="#" onClick={()=>change_p(a)} className="page-link">
                  {a}
                </a>
          </li>
              )
            })
          }
          <li className="page-item">
            <a href="#" onClick={()=>next()} className={`page-link`}>
              Next
            </a>
          </li>
          </ul>
        </nav>
       </div>
      </div>
    </div>
  )
 
}