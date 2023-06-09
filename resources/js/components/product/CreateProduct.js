import React, { useEffect, useState } from "react";
export default function CreateProduct(){
  const [Category,setCategory]=useState([]);
  const [verify,setVerify]=useState(false);
  const [Picture,setPicture]=useState([]);
  const [ProductInput,setProduct]=useState({
    category_id:'',
    code:'',
    name:'',
    price:'',
    description: ''
  })
  const [status_p,setStatus]=useState(0);
  const [populart,setPopular]=useState(0);
  const [selectedFiles,setSelectedFile]=useState([]);
  const [files,setFile]=useState([]);
  useEffect(()=>{
    getCategory()
  },[])
  function getCategory(){
    axios.get('/category/all').then((resp)=>{
      if(resp.data.status===200){
        setCategory(resp.data.categories)
      }
    })
  }
  function handleInput(e){
  setProduct({...ProductInput,[e.target.name]:e.target.value})
  }

  const handleImageMultiple=(e)=>{
    setSelectedFile([]);
   if(e.target.files){
    setFile(e.target.files)
      const filesArray=Array.from(e.target.files).map((file)=>URL.createObjectURL(file));
      setSelectedFile((prevImage)=>prevImage.concat(filesArray));
      Array.from(e.target.files).map((file)=>URL.revokeObjectURL(file))
    }

  }
  const RenderPhoto=(source)=>{
    return source.map((photo)=>{
      return <img src={photo} width="60px" height="60px"/>
    })

  }
  function handleImage(event){
    event.persist();
    setPicture({image:event.target.files[0]})

  }

  function save(event){
    event.preventDefault();
    if(ProductInput.category_id.length===0 
        || ProductInput.code.length===0 
        || ProductInput.name.length===0
        || ProductInput.price.length===0
        || ProductInput.description.length===0
       ){
     setVerify(true)
     return false
    }
    const data=new FormData();
    data.append('category_id',ProductInput.category_id);
    data.append('code',ProductInput.code);
    data.append('name',ProductInput.name);
    data.append('price',ProductInput.price);
    data.append('description',ProductInput.description);
    data.append('status',status_p);
    data.append('popular',populart);
    data.append('image',Picture.image);
    for(let i=0;i< files.length;i++){
      data.append('photos[]',files[i])
    }
    axios.post('/product/new',data).then((resp)=>{
      if(resp.data.status===200){
       
      }
    })

  }
  return(
    <div className="container col-md-4 offset-md-4 mt-5 shadow-lg p-3 mb-5 bg-body rounded">
      <div className="row">
       <form onSubmit={save} encType="multipart/form-data">

       <div className="form-group mt-2">
       <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="category_id" onChange={handleInput}>
            <option value="0" >Open this select menu</option>
            {
              Category.map((x,y)=>{
                return(
                <option key={y} value={x.id}>{x.name}</option>
                )
              })
            }
            </select>
            {verify && ProductInput.category_id.length <=0 ? <span className="text-danger">select the category product</span> :''}

            </div>
            <div className="form-group mt-2">
          <input type="text" name="code" className="form-control mt-2" onChange={handleInput} placeholder="Enter the product ref"/>
            {verify && ProductInput.code.length <=0 ? <span className="text-danger">enter the product code</span> :''}
          </div>

          

          <div className="form-group mt-2">
          <input type="text" name="name" className="form-control mt-2" onChange={handleInput} placeholder="Enter the product name"/>
            {verify && ProductInput.name.length <=0 ? <span className="text-danger">enter the  product name</span> :''}
          </div>

          <div className="form-group mt-2">
          <input type="text" name="price" className="form-control mt-2" onChange={handleInput} placeholder="Enter the product price"/>
            {verify && ProductInput.price.length <=0 ? <span className="text-danger">enter the price product</span> :''}
          </div>
          <div className="form-group mt-2">
          <textarea type="text" className="form-control" onChange={handleInput} name="description" placeholder="Enter the product description"></textarea>
            {verify && ProductInput.description.length <=0 ? <span className="text-danger">enter the description product</span> :''}
          </div>
     
          <div className="form-group input-group">
          <label>Status</label>
          <input type="checkbox" value="1" onChange={status}/>
          <label>Status</label>
          <input type="checkbox" value="1" onChange={popular}/>
          </div>
          <div className="form-group mt-2">
          <input type="file" name="image" className="form-control mt-2" onChange={handleImage}/>
          </div>

          <div className="form-group mt-2">
          Gallery
          <input type="file" id="file" name="file[]" className="form-control mt-2" onChange={handleImageMultiple} multiple/>

          <div className="mt-3">{RenderPhoto(selectedFiles)}</div>
          </div>
         <button className="btn btn-primary mt-2" type="submit">save</button>
       </form>
      </div>
    </div>
  )
  function status(event){
    const {value,checked}=event.target;
    if(checked){
      setStatus(1)
    }else[
      setStatus(0)

    ]
  }
  function popular(event){
    const {value,checked}=event.target;
    if(checked){
      setPopular(1)
    }else{
      setPopular(0)

  }
  }
}