import React, { useState } from "react";
import Role from "../Role";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
export default function Create(){
  const [Picture,setPicture]=useState([]);
  const [Status,setStatus]=useState(0);
  const [verify,setVerify]=useState(false);
 const history=useHistory();
  const [CategoryInput,setCategory]=useState({
    code:'',
    name:'',
  })
  function save(event){
    event.preventDefault();
    if(CategoryInput.name.length===0   || CategoryInput.code.length===0){
     setVerify(true)
     return false
    }
    const data=new FormData();
    data.append('code',CategoryInput.code);
    data.append('name',CategoryInput.name);
    data.append('status',Status);
    data.append('image',Picture.image);
    axios.post('/category/new',data).then((resp)=>{
      if(resp.data.status===200){
        setCategory({...CategoryInput,
          name:'',
          code:''
        })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'voce quer confirmar o cadastro?',
          showConfirmButton: false,
          timer: 1500
        })
        history.push('/category/list');
      }
    })

  }
  return(
   <div className="container mt-5">
    <div className="row">
      <div className="col-md-2">
        <Role/>
      </div>
      <div className="col-md-6 offset-md-3 shadow-sm p-3 mb-5 bg-body rounded">
    
        <form onSubmit={save}>
          <div className="form-group mt-2">
            <input type="text" placeholder="the code category" name="code"
             className="form-control" onChange={handleInput} value={CategoryInput.code}/>
            {verify && CategoryInput.code.length <=0 ? <span className="text-danger">digite your code category</span> :''}

          </div>
          <div className="form-group mt-2">
            <input type="text" placeholder="the name category" name="name"
             className="form-control" onChange={handleInput} value={CategoryInput.name}/>
            {verify && CategoryInput.name.length <=0 ? <span className="text-danger">digite your name category</span> :''}

          </div>
          <div className="form-group">
          <label>Status</label>
          <input type="checkbox" value="1" onChange={checkbox}/>
          </div>

          <div className="form-group mt-2">
            <input type="file" name="image "
             className="form-control" onChange={handleImage} />
          </div>
          <div className="form-group mt-2">
            <input type="submit" className="btn btn-primary btn-sm float-end"/>
          </div>
        </form>
      </div>
    </div>
      </div>
  )
        function handleInput(event){
        setCategory({...CategoryInput,[event.target.name]:event.target.value})
        }
        function handleImage(event){
          event.persist();
          setPicture({image:event.target.files[0]})

        }

        function checkbox(event){
        const {value,checked}=event.target;
        if(checked){
          setStatus(value);
        }
        else{
          setStatus(0);

        }
        }
}