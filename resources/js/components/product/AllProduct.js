import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import Barcode from "react-barcode";
import { Link } from "react-router-dom";
import Role from "../Role";
const AllProduct=()=>{
const [Product,setProduct]=useState([]);
const [DatFilter,setData]=useState([]);

const [Category,setCategory]=useState([]);
const [EditId,setEditId]=useState(-1);
const [verify,setVerify]=useState(false);
const [ProductInput,setProducts]=useState({
  category_id:'',
  code:'',
  name:'',
  price:'',
  description: '',
  status:0,
  popular:0
})
const [Picture,setPicture]=useState([]);
const [status_p,setStatus]=useState(0);
const [popular_p,setPopular]=useState(0);

//pagination
const [CurrentPage,setCurrentPage]=useState(1);
const [RecordPage,setRecordPage]=useState(3);
const lastIndex= CurrentPage*RecordPage;
const firstIndex=lastIndex-RecordPage;
const Records=Product.slice(firstIndex,lastIndex);

const nPage=Math.ceil(Product.length/RecordPage);
const Numbers=[...Array(nPage+1).keys()].slice(1);


  useEffect(()=>{
    getProduct()
  },[])
  function getProduct(){
    axios.get('/product/all').then((resp)=>{
      if(resp.data.status===200){
        setProduct(resp.data.prod)
        setCategory(resp.data.cat)
        setData(resp.data.prod)

      }
    })
  }
  const Only=(id)=>{
    setVerify(true)

    axios.get(`/product/edit/${id}`).then((resp)=>{
      if(resp.data.status===200){
      setProducts({...ProductInput,
      category_id:resp.data.pro.category_id,
      code:resp.data.pro.code,
      name:resp.data.pro.name,
      price:resp.data.pro.price,
      description:resp.data.pro.description,

      })
      setEditId(id);

      }
    })
  }
  function handleInput(e){
    setProducts({...ProductInput,[e.target.name]:e.target.value})
    }
    function handleImage(event){
      event.persist();
      setPicture({image:event.target.files[0]})
  
    }

    function update(event){
      event.preventDefault();
    
      const data=new FormData();
      data.append('id',EditId);
      data.append('category_id',ProductInput.category_id);
      data.append('code',ProductInput.code);
      data.append('name',ProductInput.name);
      data.append('price',ProductInput.price);
      data.append('description',ProductInput.description);
      data.append('status',status_p);
      data.append('popular',popular_p);
      data.append('image',Picture.image);
      axios.post('/product/update',data).then((resp)=>{
        if(resp.data.status===200){
         setEditId(-1);
         getProduct();
        }
      })
  
    }
    const Canceled=()=>{
      setEditId(-1)
    }
    const popular_=(e)=>{
      const {value,checked}=e.target;
      if(checked){
       setPopular(value)
      }else{
        setPopular(0)
      }
    }
    const status_=(e)=>{
      const {value,checked}=e.target;
      if(checked){
        setStatus(value)
      }else{
        setStatus(0)
      }
    }

    const Search=(e)=>{
      const getText=e.target.value;
      if(getText.length > 0){
        const dataText=getText;
        const Filter=Product.filter(p=>p.name.toLowerCase().includes(dataText) 
         || p.price.toLowerCase().includes(dataText)
         || p.code.toLowerCase().includes(dataText)
         || p.code.toUpperCase().includes(dataText)
         || p.name.toUpperCase().includes(dataText));
        setProduct(Filter)
      }else{
        setProduct(DatFilter)
      }
    }
  return(
    <div className="container-fluid  shadow-sm p-3 mb-5 bg-body rounded mt-5">
      <div className="row">
      <div className="col-md-2">
       <Role/>
      </div>
      <div className="col-md-10">
      <h6 className="input-group">
        <input type="text" className="form-control" placeholder="search" onChange={Search}/>

           <select className="form-select form-select-sm" aria-label=".form-select-sm " 
           onChange={(e)=>setRecordPage(e.target.value)}>
             <option value={RecordPage}>{RecordPage <=2 ? RecordPage :'show per page'}</option>
            <option value="5">5</option>
            <option value="4">8</option>
            <option value="12">12</option>
            <option value="20">20</option>
            <option value={Product.length}>show all</option>

          </select>
      </h6>
        <form onSubmit={update}>
          <table className="table table-striped">
            <thead className="bg-warning">
              <tr>
              <th>Ref</th>

                <th>Category</th>
                <th>Code</th>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Status</th>
                <th>Popular</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Records.map((product)=>(
                 product.id===EditId ?
                 <tr key={EditId}>
                  <td>
                  <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="category_id" onChange={handleInput}>
                  <option  value={product.category_id===ProductInput.category_id ? 'selected':''}>{product.category.name }</option>
                  {
                    Category.map((x,y)=>{
                      return(
                      <option key={y} value={x.id}>{x.name}</option>
                      )
                    })
            }
            </select>
                  </td>
                  <td><input type="text" value={ProductInput.code} name="code" className="form-control text-center" onChange={handleInput}/></td>
                  <td><input type="text" value={ProductInput.name} name="name" className="form-control text-center" onChange={handleInput}/></td>
                  <td><input type="text" value={ProductInput.price} name="price" className="form-control text-center" onChange={handleInput}/></td>
                  <td>
                   <input type="file" name="image" className="form-control mt-2" onChange={handleImage}/>

                  </td>
                <td>
                s<input type="checkbox" value="1" name="status" defaultChecked={product.status==="1" ? 'checked':""} onChange={status_}/>
                
                </td>
                <td>
                p<input type="checkbox" value="1" name="popular" defaultChecked={product.popular==="1" ? 'checked':""} onChange={popular_}/>
                
                </td>
                <td className="input-group" style={{fontSize:'8px'}}>
                    <button className="btn btn-danger btn-sm"><i className="fas fa-ban" type="button" onClick={()=>Canceled()}></i></button>
                    <button className="btn btn-primary btn-sm float-end" type="submit">update</button>
                  </td>

                 </tr>
                 :
                 <tr key={product.id}>
                 <td>
                  <QRCode
                    size={256}
                    style={{height:'20px',maxWidth:'120px',width:'120px'}}
                    value={product.price}
                  />
                 </td>

                    <td>{product.category.name}</td>
                    <td>{product.code}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td className="text-center"><img src={`/images/products/${product.image}`} width="30px" height="40px"/></td>
                    <td className={`${product.status==='1' ? 'bg-success text-white':'bg-danger text-white'}`}>{product.status==="1" ? 'ok' :'x'}</td>
                    <td className={`${product.popular==='1' ? 'bg-success text-white':'bg-danger text-white'}`}>{product.popular==="1" ? 'ok' :'x'}</td>
                    <td className="input-group">
                    <button className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button>
                    <button className="btn btn-primary btn-sm" type="button" onClick={(e)=>Only(product.id)}><i className="fas fa-pen"></i></button>
                  </td>

                  </tr>
                ))
              }
            </tbody>
          </table>
          <nav>
            <ul className="pagination">
            <li className={`page-item ${CurrentPage===1 ? 'disabled bg-dark' :''}`}>
              <a href="#" className="page-link" onClick={()=>prev()}>
                  prev
                </a>
              </li>
                
                  {
                    Numbers.map((x,y)=>{
                      return(
                        <li className={`page-item ${x===CurrentPage ? 'active' :''}`} key={y}>
                        <a href="#" className="page-link" onClick={()=>cp(x)}>{x}</a>
                      </li>
                      )
                    })
                  }

                  <li className={`page-item ${CurrentPage===Numbers.length ? 'disabled bg-dark' :''}`}>
                <a href="#" className="page-link" onClick={()=>next()}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </form>
        </div>
      </div>
    </div>
  )
  function prev(){
    if(CurrentPage !==1){
      setCurrentPage(CurrentPage-1)
    }
  }
  function next(){
    if(CurrentPage !==nPage){
      setCurrentPage(CurrentPage+1)
    }
  }

  function cp(id){
   
      setCurrentPage(id)
    
  }
  
}
export default AllProduct;