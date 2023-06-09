import React, { useEffect, useState } from "react";

export default function Cart(){

  const [DataCart,setData]=useState([]);
  const [DataUpdate,setDataUp]=useState([]);
  const [total,setTotal]=useState(0);
 let t=0;
  
  useEffect(()=>{
    const getCart=async()=>{
      await axios.get('/cart/get').then((resp)=>{
         if(resp.data.status===200){
           setData(resp.data.gets.cart1)
           setDataUp(resp.data.gets.cart1)
   
         }
       })
   }
   getCart();
  },[])


const Delete=(e,id)=>{
  var alert=e.currentTarget;
  axios.post('/cart/remove',{ids:id}).then((resp)=>{
    if(resp.data.status===200){
      
      alert.closest('li').remove();
      getTotal()

    }
  })
}
const update=(id)=>{
  axios.post('/cart/update',{ids:id}).then((resp)=>{
    if(resp.data.status===200){
      getCart()

    }
  })
}
return(
<div>
<div className="container">
<div className="row">
 <div className="col-lg-6 offset-lg-3">
 <ul className="list-group ">
  {
   DataCart ?.map((a,b)=>(
      t+=parseInt(a.price),
   
      <li className="list-group-item d-flex justify-content-between align-items-center mt-2" key={b}>
      <img src={`/images/products/${a.image}`} width="50px" height="50px"/>
     <p className="text-truncate"> {a.name}</p><br/>
     <span className="text-danger">R$;  {a.price} * {a.quantity}</span>
    <span className="a">
    <div className="btn-group btn-group-sm" role="group" aria-label="...">
     <button className="btn btn-primary btn-sm" type="button" onClick={()=>update(a.id)}>+</button>
     <button className="btn btn-danger btn-sm" onClick={(e)=>Delete(e,b)} type="button" style={{marginLeft:'10px'}}>-</button>

    </div>
    </span>
  </li>
    ))
   
  }

</ul>
 </div>
{
  total < 0 ?
  <div className="col-lg-2 mt-2">
 <div className="card">
  <div className="card-body">
    <strong>Total:{total}</strong>
  </div>
</div>
 </div>
 : ''
}
</div>

  </div>

  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
</div>
)
function getTotal(){
  return setTotal(t);
}
}