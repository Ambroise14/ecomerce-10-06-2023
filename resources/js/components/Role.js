import React from "react";
import { Link } from "react-router-dom";
export default function Role(){
  return(
    <div className="list-group shadow-sm p-3 mb-5 bg-body rounded" id="list-tab" role="tablist">
          <Link to="/category/new" className={`list-group-item list-group-item-action mt-2 ${window.location.pathname==="/category/new" ? 'active' :''}` }>Category new</Link>
          <Link to="/category/list" className={`list-group-item list-group-item-action mt-2 ${window.location.pathname==="/category/list" ? 'active' :''}` }>All Category</Link>
          <Link to="/product/new" className={`list-group-item list-group-item-action mt-2 ${window.location.pathname==="/product/new" ? 'active' :''}` }>product new</Link>
          <Link to="/product/list" className={`list-group-item list-group-item-action mt-2 ${window.location.pathname==="/product/list" ? 'active' :''}` }>All Product</Link>



    </div>
  )
}