import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Route,Switch ,Redirect} from "react-router-dom";
import MasterLayout from '../Layout/MasterLayout';
function App() {

    return (
      <div>
       
       <div className='py-5'>
            <Router>
              <Switch>
                <Route path="/" name="Home" render={(props)=><MasterLayout {...props}/>}/>
              </Switch>
            </Router>
        </div>
         
      </div>
        
    );
}

export default App;

