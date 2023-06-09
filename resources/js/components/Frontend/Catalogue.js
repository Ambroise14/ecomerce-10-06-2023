import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../Sessions/Carousel";
import Slide from "../Sessions/Slide";
export default function Catalogue(){
const [Product,setProduct]=useState([]);
const [Category,setCategory]=useState([]);


  useEffect(()=>{
    getProduct()
  },[])
  function getProduct(){
    axios.get('/product/all').then((resp)=>{
      if(resp.data.status===200){
        setProduct(resp.data.prod)
        setCategory(resp.data.cat)

      }
    })
  }
  
  return(
 <div>
    <Carousel/>
    <section className="product-area li-laptop-product li-laptop-product-2 pb-45">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="li-section-title">
                    <h2>
                        <span>Laptops</span>
                    </h2>
                    <ul className="li-sub-category-list">
                        <li className="active"><a href="shop-left-sidebar.html">Prime Video</a></li>
                        <li><a href="shop-left-sidebar.html">Computers</a></li>
                        <li><a href="shop-left-sidebar.html">Electronics</a></li>
                    </ul>
                </div>
                <div className="li-banner-2 pt-15">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-banner">
                                <a href="#">
                                    <img src="/luana/images/banner/2_1.jpg" alt="Li's Static Banner"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="single-banner pt-xs-30">
                                <a href="#">
                                    <img src="/luana/images/banner/2_2.jpg" alt="Li's Static Banner"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
          <div className="row mt-4">
            {
                  Product.map((x)=>(
                    <div className="col-sm-3" key={x.id}>
                    
                        <div className="single-product-wrap">
                        <Link to={`/description/d/${x.id}`}>
                            <div className="product-image">
                                <a href="single-product.html">
                 
                                <img className="card-img-top" src={`/images/products/${x.image}`}  height="300px" width="200px"/>
                                </a>
                                <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                                <div className="product_desc_info">
                                    <div className="product-review">
                                        <h5 className="manufacturer">
                                            <a href="product-details.html">Graphic Corner</a>
                                        </h5>
                                        <div className="rating-box">
                                            <ul className="rating">
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h4><a className="product_name" href="single-product.html">{x.name}</a></h4>
                                    <div className="price-box">
                                        <span className="new-price">R$: {x.price}  </span>
                                    </div>
                                </div>
                                <div className="add-actions">
                                    <ul className="add-actions-link">
                                        <li className="add-cart active"><a href="#">Add to cart</a></li>
                                        <li><a href="#" title="quick view" className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-eye"></i></a></li>
                                        <li><a className="links-details" href="wishlist.html"><i className="fa fa-heart-o"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
           
                  
                ))
                 }
            </div>
            </div>
        </div>
    </div>
    </section>
 </div>
  )
}

