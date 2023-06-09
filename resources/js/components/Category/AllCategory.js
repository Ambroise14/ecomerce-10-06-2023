import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Role from "../Role";
import Swal from "sweetalert2";
export default function AllCategory(){

  const [Category,setCategory]=useState([]);
  const [DataFilter,setData]=useState([]);
  const [EditId,setEditId]=useState(-1);
  const [Picture,setPicture]=useState([]);
  const [popular,setPopular]=useState(0);
  const [CategoryInput,setCategoryInput]=useState({
    code:'',
    name:'',
  })
  //pagination
  const [CurrentPage,setCurrentPage]=useState(1);
  const [RecordPage,setRecordPage]=useState(3);
  const lastIndex=CurrentPage*RecordPage;
  const firstIndex=lastIndex-RecordPage;
  const Records=Category.slice(firstIndex,lastIndex);
  
  const nPage=Math.ceil(Category.length/RecordPage);
  const Numbers=[...Array(nPage+1).keys()].slice(1);
  //end pagination

  useEffect(()=>{
    getCategory()
  },[])
  function getCategory(){
    axios.get('/category/all').then((resp)=>{
      if(resp.data.status===200){
        setCategory(resp.data.categories)
        setData(resp.data.categories)
      }
    })
  }
  const Only=(id)=>{
    axios.get(`/category/edit/${id}`).then((resp)=>{
      if(resp.data.status===200){
        setCategoryInput({...CategoryInput,
        code:resp.data.cat.code,
        name:resp.data.cat.name,

        });
      setEditId(id);

      }
    })
  }
  const Canceled=()=>{
    setEditId(-1)
  }
  const handleInput=(e)=>{
   setCategoryInput({...CategoryInput,[e.target.name]: e.target.value});
  }
  const handleImage=(e)=>{
    e.persist();
    setPicture({image:e.target.files[0]})
  }
  const handleCheckbox=(e)=>{
    const {value,checked}=e.target;
    if(checked){
     setPopular(value)
    }else{
      setPopular(0)
    }
  }
  const update=(e)=>{
    e.preventDefault();
    const data=new FormData();
    data.append('code',CategoryInput.code);
    data.append('name',CategoryInput.name);
    data.append('id',EditId);
    data.append('status',popular);
    data.append('image',Picture.image);
    axios.post('/category/update',data).then((resp)=>{
    if(resp.data.status===200){
      setCategory(resp.data.categories)
      setCategoryInput({...CategoryInput,
        name:'',
        code:''
      })
      setPicture('');
      setEditId(0)

    }
    })
  }
  
  const handleSearch=(e)=>{
    const text=e.target.value;
    if(text.length > 0){
      const getValue=text;
      const ok=Category.filter(cat=>cat.code.toLowerCase().includes(getValue))
     setCategory(ok)
    }else{
      setCategory(DataFilter)
    }
  }
  const show=(e)=>{
    if(RecordPage===e.target.value){
      
    }
  }
  const Delete=(e,id)=>{
   var alert=e.currentTarget;
   alert.innerHTML="Deleting";
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        axios.get(`/category/delete/${id}`).then((resp)=>{
          if(resp.data.status===200){
            getCategory();
          }

        })
      }
    })
   

  }
  return(
    <div className="container  shadow-sm p-3 mb-5 bg-body rounded mt-5">
      <div className="row">
      <div className="col-md-2">
      <Role/>
      </div>
        <div className="col-md-10">
        <h6 className="input-group">
        <input type="text" className="form-control" placeholder="search" onChange={handleSearch}/>

           <select className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={(e)=>setRecordPage(e.target.value)}>
           <option value={RecordPage}>{RecordPage <=2 ? RecordPage :'show per page'}</option>
           
            <option value="5">5</option>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="20">20</option>
            <option value="210">210</option>
            <option value={Category.length}>show all</option>

          </select>
      </h6>
        <form onSubmit={update}>
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>CODE</th>
                <th>NAME</th>
                <th>STATUS</th>
                <th className="text-center">IMAGE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
            {
              Records.map((x)=>(
               x.id===EditId ?
               <tr key={EditId}>
                <td><input type="text" value={CategoryInput.code} name="code" onChange={handleInput}/></td>
                <td><input type="text" value={CategoryInput.name} name="name" onChange={handleInput}/></td>
                <td><input type="checkbox" value="1" defaultChecked={x.status==="1" ? 'checked':""} onChange={handleCheckbox}/></td>
                <td><input type="file"  onChange={handleImage}/></td>
                <td className="input-group">
                    <button className="btn btn-info btn-sm" type="button" onClick={()=>Canceled()}>Canceler</button>
                    <button className="btn btn-primary btn-sm" type="submit">Update</button>
                  </td>
               </tr>
               :
               <tr key={x.id}>
                    <td>{x.code}</td>
                    <td>{x.name}</td>
                    <td className={`${x.status==='1' ? 'bg-success text-white':'bg-danger text-white'}`}>{x.status==="1" ? 'Play' :'Disabled'}</td>
                  <td className="text-center"><img src={`/images/category/${x.image}`} width="30px" height="40px"/></td>
                  <td className="input-group">
                    <button className="btn btn-danger btn-sm" type="button" onClick={(e)=>Delete(e,x.id)}>Delete</button>
                    <button className="btn btn-primary btn-sm" type="button" onClick={(e)=>Only(x.id)}>Edit</button>
                  </td>
                  </tr>
              ))
            }
            </tbody>
          </table>
          <nav>
            <ul className="pagination">
              <li className="page-item">
              <a href="#" className="page-link" onClick={()=>prev()}>
                  Prev
                </a>
              </li>
              {
                Numbers.map((x,y)=>{
                  return(
                    <li className={`page-item ${x===CurrentPage ? 'active' :''}`} key={y}>
                    <a href="#" className="page-link" onClick={()=>change_p(x)}>{x}</a>
                  </li>
                  )
                })
              }

              <li className="page-item">
                <a href="#" className="page-link"  onClick={()=>next()}>
                  next
                </a>
              </li>
            </ul>
          </nav>
        </form>
        </div>
      </div>
    </div>
  )
  function change_p(id){
    setCurrentPage(id)
  }
  function prev(){
    if(CurrentPage !==1){
      setCurrentPage(CurrentPage-1)
    }
  }
  function next(){
    if(CurrentPage !==nPage){
      setCurrentPage(CurrentPage + 1)
    }
  }
}