import User from "../components/User/User";
import All from "../components/User/All";
//category
import Create from "../components/Category/Create";
import AllCategory from "../components/Category/AllCategory";
//product
import CreateProduct from "../components/product/CreateProduct";
import AllProduct from "../components/product/AllProduct";
//catalogue
import Catalogue from "../components/Frontend/Catalogue";

//description
import Description from "../components/Frontend/Description";
//cart
import Cart from "../components/Frontend/Cart";
const Routes=[

  {path:"/",name:"Home"},
  {path:"/user/new",name:"/user/new",component:User},
  {path:"/user/all",name:"/user/new",component:All},

  {path:"/category/new",name:"/category/new",component:Create},
  {path:"/category/list",name:"/category/list",component:AllCategory},


//product
{path:"/product/new",name:"/product/new",component:CreateProduct},
{path:"/product/list",name:"/product/list",component:AllProduct},

//catalogue

{path:"/catalogue/home",name:"/catalogue/home",component:Catalogue},

{path:"/description/d/:id",name:"/description/d",component:Description},

//cart
{path:"/cart/view",name:"/cart/view",component:Cart},

]
export default Routes;