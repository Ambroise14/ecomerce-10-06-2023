import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const Description=(props)=>{
  const [product,setProduct]=useState('');
  const [Image,setImage]=useState([]);
  const [Id,setId]=useState(props.match.params.id)
const [Products,setProducts]=useState([]);

  const history=useHistory();

  useEffect(()=>{
    getProduct()
  },[])
  function getProduct(){
    
    axios.get(`/description/${Id}`).then((resp)=>{
      if(resp.data.status===200){
        setProduct(resp.data.prod)
        setProducts(resp.data.prods)
        setImage(resp.data.images)
      }
    },[props.match.params.id])
  }
  const handleInput=(e)=>{
    const np=e.target.value;
  }
  const add=(id)=>{
      axios.post('/cart/add',{product_id:id}).then((resp)=>{
        if(resp.data.status===200){
         history.push('/cart/view')
        }
      })
    
  }
  return(
   <div>
     <section>
       <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Single Product</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content-wraper">
                <div className="container">
                    <div className="row single-product-area">
                        <div className="col-lg-5 col-md-6">
                            <div className="product-details-left">
                                <div className="product-details-images slider-navigation-1">
                                <div className="lg-image">
                                        <a className="popup-img venobox vbox-item" href={`/images/products/${product.image}`} data-gall="myGallery">
                                            <img src={`/images/products/${product.image}`} alt="product image"/>
                                        </a>
                                    </div>
                                    
                                </div>
                                <ul className="list-group list-group-horizontal mt-2 a">                                        
                                    {
                                      Image.map((z)=>(
                                    <li className="list-group-item b" key={z.id}><img src={`/images/products/${z.photo}`} alt="product image thumb" width="60px" height="60px"/></li>

                                      ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-6">
                            <div className="product-details-view-content pt-60">
                                <div className="product-info">
                                    <h2>{product.name}</h2>
                                    <span className="product-details-ref">{product.code}</span>
                                    <div className="rating-box pt-20">
                                        <ul className="rating rating-with-review-item">
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li className="no-star"><i className="fa fa-star-o"></i></li>
                                            <li className="no-star"><i className="fa fa-star-o"></i></li>
                                            <li className="review-item"><a href="#">Read Review</a></li>
                                            <li className="review-item"><a href="#">Write Review</a></li>
                                        </ul>
                                    </div>
                                    <div className="price-box pt-20">
                                        <span className="new-price new-price-2">R$:{product.price}</span>
                                    </div>
                                    <div className="product-desc">
                                        <p>
                                            <span>100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.
                                            </span>
                                        </p>
                                    </div>
                                    <div className="product-variants">
                                        <div className="produt-variants-size">
                                            <label>Dimension</label>
                                            <select className="nice-select" onChange={handleInput}>
                                                <option value="1" title="S">40x60cm</option>
                                                <option value="2" title="M">60x90cm</option>
                                                <option value="3" title="L">80x120cm</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="single-add-to-cart">
                                        <form action="#" className="cart-quantity">
                                            <div className="quantity">
                                                <label>Quantity</label>
                                                <div className="cart-plus-minus">
                                                    <input className="cart-plus-minus-box" value="1" type="text" onChange={handleInput}></input>
                                                    <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                                                    <div className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                                                </div>
                                            </div>
                                            <button className="add-to-cart" type="button" onClick={()=>add(product.id)}>Add to cart</button>
                                        </form>
                                    </div>
                                    <div className="product-additional-info pt-25">
                                        <a className="wishlist-btn" href="wishlist.html"><i className="fa fa-heart-o"></i>Add to wishlist</a>
                                        <div className="product-social-sharing pt-25">
                                            <ul>
                                                <li className="facebook"><a href="#"><i className="fa fa-facebook"></i>Facebook</a></li>
                                                <li className="twitter"><a href="#"><i className="fa fa-twitter"></i>Twitter</a></li>
                                                <li className="google-plus"><a href="#"><i className="fa fa-google-plus"></i>Google +</a></li>
                                                <li className="instagram"><a href="#"><i className="fa fa-instagram"></i>Instagram</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="block-reassurance">
                                        <ul>
                                            <li>
                                                <div className="reassurance-item">
                                                    <div className="reassurance-icon">
                                                        <i className="fa fa-check-square-o"></i>
                                                    </div>
                                                    <p>Security policy (edit with Customer reassurance module)</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="reassurance-item">
                                                    <div className="reassurance-icon">
                                                        <i className="fa fa-truck"></i>
                                                    </div>
                                                    <p>Delivery policy (edit with Customer reassurance module)</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="reassurance-item">
                                                    <div className="reassurance-icon">
                                                        <i className="fa fa-exchange"></i>
                                                    </div>
                                                    <p> Return policy (edit with Customer reassurance module)</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="product-area pt-35">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="li-product-tab">
                                <ul className="nav li-product-menu">
                                   <li><a className="active" data-toggle="tab" href="#description"><span>Description</span></a></li>
                                   <li><a data-toggle="tab" href="#product-details"><span>Product Details</span></a></li>
                                   <li><a data-toggle="tab" href="#reviews"><span>Reviews</span></a></li>
                                </ul>               
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="description" className="tab-pane active show" role="tabpanel">
                            <div className="product-description">
                                <span>The best is yet to come! Give your walls a voice with a framed poster. This aesthethic, optimistic poster will look great in your desk or in an open-space office. Painted wooden frame with passe-partout for more depth.</span>
                            </div>
                        </div>
                        <div id="product-details" className="tab-pane" role="tabpanel">
                            <div className="product-details-manufacturer">
                                <a href="#">
                                <img src={`/images/products/${product.image}`} alt="product image"/>
                                </a>
                                <p><span>Reference</span> demo_7</p>
                                <p><span>Reference</span> demo_7</p>
                            </div>
                        </div>
                        <div id="reviews" className="tab-pane" role="tabpanel">
                            <div className="product-reviews">
                                <div className="product-details-comment-block">
                                    <div className="comment-review">
                                        <span>Grade</span>
                                        <ul className="rating">
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li><i className="fa fa-star-o"></i></li>
                                            <li className="no-star"><i className="fa fa-star-o"></i></li>
                                            <li className="no-star"><i className="fa fa-star-o"></i></li>
                                        </ul>
                                    </div>
                                    <div className="comment-author-infos pt-25">
                                        <span>HTML 5</span>
                                        <em>01-12-18</em>
                                    </div>
                                    <div className="comment-details">
                                        <h4 className="title-block">Demo</h4>
                                        <p>Plaza</p>
                                    </div>
                                    <div className="review-btn">
                                        <a className="review-links" href="#" data-toggle="modal" data-target="#mymodal">Write Your Review!</a>
                                    </div>
                                    <div className="modal fade modal-wrapper" id="mymodal" >
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <h3 className="review-page-title">Write Your Review</h3>
                                                    <div className="modal-inner-area row">
                                                        <div className="col-lg-6">
                                                           <div className="li-review-product">
                                                               <img src="images/product/large-size/3.jpg" alt="Li's Product"/>
                                                               <div className="li-review-product-desc">
                                                                   <p className="li-product-name">Today is a good day Framed poster</p>
                                                                   <p>
                                                                       <span>Beach Camera Exclusive Bundle - Includes Two Samsung Radiant 360 R3 Wi-Fi Bluetooth Speakers. Fill The Entire Room With Exquisite Sound via Ring Radiator Technology. Stream And Control R3 Speakers Wirelessly With Your Smartphone. Sophisticated, Modern Design </span>
                                                                   </p>
                                                               </div>
                                                           </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="li-review-content">
                                                                <div className="feedback-area">
                                                                    <div className="feedback">
                                                                        <h3 className="feedback-title">Our Feedback</h3>
                                                                        <form action="#">
                                                                            <p className="your-opinion">
                                                                                <label>Your Rating</label>
                                                                                <span>
                                                                                    <select className="star-rating" onChange={handleInput}>
                                                                                      <option value="1">1</option>
                                                                                      <option value="2">2</option>
                                                                                      <option value="3">3</option>
                                                                                      <option value="4">4</option>
                                                                                      <option value="5">5</option>
                                                                                    </select>
                                                                                </span>
                                                                            </p>
                                                                            <p className="feedback-form">
                                                                                <label >Your Review</label>
                                                                                <textarea id="feedback" name="comment" cols="45" rows="8" aria-required="true"></textarea>
                                                                            </p>
                                                                           
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <hr/>

    <section className="product-area li-laptop-product pt-30 pb-50">
      <div className="container">
    <div className="row">
        <div className="col-lg-12">
            <div className="li-section-title">
                <h2>
                    <span>15 other products in the same category:</span>
                </h2>
            </div>
            <div className="row">
            {
                  Products.map((x)=>(
                
                    <div className="col-sm-3">
                    <div className="single-product-wrap">
                      
                            <div className="product-image">
                            <button onClick={()=>setId(x.id)} type="button" className="border-0">
                 
                                <img className="card-img-top" src={`/images/products/${x.image}`}  height="300px" width="200px"/>
                                </button>
                                <span className="sticker">New</span>
                            </div>
                            <div className="product_desc">
                                <div className="product_desc_info">
                                    <div className="product-review">
                                        <h5 className="manufacturer">
                                            <a href="#">Graphic Corner</a>
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
                                    <h4><text className="product_name" href="#">{x.name}</text></h4>
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
export default Description