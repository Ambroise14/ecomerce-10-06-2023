import React from "react";
export default function Carousel(){
  return(
    <div className="slider-with-banner">
    <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="category-menu">
                    <div className="category-heading">
                        <h2 className="categories-toggle"><span>categories</span></h2>
                    </div>
                    <div id="cate-toggle" className="category-menu-list">
                        <ul>
                            
                            <li className="right-menu"><a href="shop-left-sidebar.html">TV & Audio</a>
                                <ul className="cat-mega-menu">
                                    <li className="right-menu cat-mega-title">
                                       <a href="shop-left-sidebar.html">Chamcham</a>
                                        <ul>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Gaming</a></li>
                                            <li><a href="#">Chromebook</a></li>
                                            <li><a href="#">Refurbished</a></li>
                                            <li><a href="#">Touchscreen</a></li>
                                            <li><a href="#">Ultrabooks</a></li>
                                            <li><a href="#">Netbook</a></li>
                                        </ul>
                                    </li>
                                   
                                    
                                </ul>
                            </li>
                            <li className="right-menu"><a href="shop-left-sidebar.html">Smartphone</a>
                                <ul className="cat-mega-menu cat-mega-menu-2">
                                    <li className="right-menu cat-mega-title">
                                       <a href="shop-left-sidebar.html">Camera Accessories</a>
                                        <ul>
                                            <li><a href="#">Octa Core</a></li>
                                            <li><a href="#">Quad Core</a></li>
                                            <li><a href="#">Dual Core</a></li>
                                            <li><a href="#">7.0 Screen</a></li>
                                            <li><a href="#">9.0 Screen</a></li>
                                            <li><a href="#">Bags & Cases</a></li>
                                        </ul>
                                    </li>
                                    <li className="right-menu cat-mega-title">
                                       <a href="shop-left-sidebar.html">XailStation</a>
                                        <ul>
                                            <li><a href="#">Batteries</a></li>
                                            <li><a href="#">Microphones</a></li>
                                            <li><a href="#">Stabilizers</a></li>
                                            <li><a href="#">Video Tapes</a></li>
                                            <li><a href="#">Memory Card Readers</a></li>
                                            <li><a href="#">Tripods</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#">Cameras</a></li>
                            <li><a href="#">Headphone</a></li>
                            <li><a href="#">Smartwatch</a></li>
                            <li><a href="#">Out Door Room</a></li>
                            <li><a href="#">Chamcham</a></li>
                            <li className="rx-child"><a href="#">Mobile & Tablets</a></li>
                            <li className="rx-child"><a href="#">Accessories</a></li>
                            <li className="rx-parent">
                                <a className="rx-default">More Categories</a>
                                <a className="rx-show">Less Categories</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="slider-area pt-sm-30 pt-xs-30">
                    <div className="slider-active owl-carousel">
                        <div className="single-slide align-center-left animation-style-02 bg-4">
                            <div className="slider-progress"></div>
                            <div className="slider-content">
                                <h5>Sale Offer <span>-20% Off</span> This Week</h5>
                                <h2>Chamcham Galaxy S9 | S9+</h2>
                                <h3>Starting at <span>$589.00</span></h3>
                                <div className="default-btn slide-btn">
                                    <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="single-slide align-center-left animation-style-01 bg-5">
                            <div className="slider-progress"></div>
                            <div className="slider-content">
                                <h5>Sale Offer <span>Black Friday</span> This Week</h5>
                                <h2>Work Desk Surface Studio 2018</h2>
                                <h3>Starting at <span>$1599.00</span></h3>
                                <div className="default-btn slide-btn">
                                    <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="single-slide align-center-left animation-style-02 bg-6">
                            <div className="slider-progress"></div>
                            <div className="slider-content">
                                <h5>Sale Offer <span>-10% Off</span> This Week</h5>
                                <h2>Phantom 4 Pro+ Obsidian</h2>
                                <h3>Starting at <span>$809.00</span></h3>
                                <div className="default-btn slide-btn">
                                    <a className="links" href="shop-left-sidebar.html">Shopping Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}