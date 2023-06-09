import React from "react";
import Slide from "../components/Sessions/Slide";
import { Link } from "react-router-dom";
export default function Header(){
  return(
 <div>
     <header>
    <div className="header-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4">
                    <div className="header-top-left">
                        <ul className="phone-wrap">
                            <li><span>Telephone Enquiry:</span><a href="#">(+123) 123 321 345</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8">
                    <div className="header-top-right">
                        <ul className="ht-menu">
                            <li>
                                <div className="ht-setting-trigger"><span>Setting</span></div>
                                <div className="setting ht-setting">
                                    <ul className="ht-setting-list">
                                        <li><a href="login-register.html">My Account</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="login-register.html">Sign In</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <span className="currency-selector-wrapper">Currency :</span>
                                <div className="ht-currency-trigger"><span>USD $</span></div>
                                <div className="currency ht-currency">
                                    <ul className="ht-setting-list">
                                        <li><a href="#">EUR €</a></li>
                                        <li className="active"><a href="#">USD $</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <span className="language-selector-wrapper">Language :</span>
                                <div className="ht-language-trigger"><span>English</span></div>
                                <div className="language ht-language">
                                    <ul className="ht-setting-list">
                                        <li className="active"><a href="#"><img src="/luana/images/menu/flag-icon/1.jpg" alt=""/>English</a></li>
                                        <li><a href="#"><img src="/luana/images/menu/flag-icon/2.jpg" alt=""/>Français</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="logo pb-sm-30 pb-xs-30">
                        <Link to="/catalogue/home">
                            <img src="/luana/images/menu/logo/1.jpg" alt=""/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
                    <form action="#" className="hm-searchbox">
                      
                        <input type="text" placeholder="Enter your search key ..."/>
                        <button className="li-btn" type="submit"><i className="fa fa-search"></i></button>
                    </form>
                    <div className="header-middle-right">
                        <ul className="hm-menu">
                            <li className="hm-wishlist">
                                <a href="wishlist.html">
                                    <span className="cart-item-count wishlist-item-count">0</span>
                                    <i className="fa fa-heart-o"></i>
                                </a>
                            </li>
                            <li className="hm-minicart">
                                <div className="hm-minicart-trigger">
                                    <span className="item-icon"></span>
                                    <span className="item-text">£80.00
                                        <span className="cart-item-count">2</span>
                                    </span>
                                </div>
                                <span></span>
                                <div className="minicart">
                                    <ul className="minicart-product-list">
                                        <li>
                                            <a href="single-product.html" className="minicart-product-image">
                                                <img src="/luana/images/product/small-size/5.jpg" alt="cart products"/>
                                            </a>
                                            <div className="minicart-product-details">
                                                <h6><a href="single-product.html">Aenean eu tristique</a></h6>
                                                <span>£40 x 1</span>
                                            </div>
                                            <button className="close" title="Remove">
                                                <i className="fa fa-close"></i>
                                            </button>
                                        </li>
                                        <li>
                                            <a href="single-product.html" className="minicart-product-image">
                                                <img src="/luana/images/product/small-size/6.jpg" alt="cart products"/>
                                            </a>
                                            <div className="minicart-product-details">
                                                <h6><a href="single-product.html">Aenean eu tristique</a></h6>
                                                <span>£40 x 1</span>
                                            </div>
                                            <button className="close" title="Remove">
                                                <i className="fa fa-close"></i>
                                            </button>
                                        </li>
                                    </ul>
                                    <p className="minicart-total">SUBTOTAL: <span>£80.00</span></p>
                                    <div className="minicart-button">
                                        <a href="shopping-cart.html" className="li-button li-button-fullwidth li-button-dark">
                                            <span>View Full Cart</span>
                                        </a>
                                        <a href="checkout.html" className="li-button li-button-fullwidth">
                                            <span>Checkout</span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="header-bottom header-sticky d-none d-lg-block d-xl-block">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="hb-menu">
                        <nav>
                            <ul>
                                <li className="dropdown-holder"><a href="index.html">Home</a>
                                    <ul className="hb-dropdown">
                                        <li className="active"><a href="index.html">Home One</a></li>
                                        <li><a href="index-2.html">Home Two</a></li>
                                        <li><a href="index-3.html">Home Three</a></li>
                                        <li><a href="index-4.html">Home Four</a></li>
                                    </ul>
                                </li>
                             
                             
                               
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="shop-left-sidebar.html">Smartwatch</a></li>
                                <li><a href="shop-left-sidebar.html">Accessories</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="mobile-menu-area d-lg-none d-xl-none col-12">
        <div className="container"> 
            <div className="row">
                <div className="mobile-menu">
                </div>
            </div>
        </div>
    </div>
    </header>
 </div>
  )

}