import React from "react";
import { BrowserRouter as Router,Route,Switch ,Redirect, Link} from "react-router-dom";
import Routes from "../routes/routes";
import Header from "./Header";
import Footer from "./Footer";
export default function MasterLayout(){
  return(
    <div >
    <Header/>
     <div className="body-wrapper">
    
  
        <Switch>
          {
            Routes.map((route,idx)=>{
              return(
                route.component &&(
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props)=>(
                      <route.component {...props}/>
                    )}
                  />
                )
              )
            })
          }
          <Redirect from="/" to ="/catalogue/"/>
        </Switch>  
        </div>  
        <Footer/>    
   </div>
   
  )
}