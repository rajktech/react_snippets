import React from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import UseStateHooksComp from './demos/useStateHooks';
import DataPass from './demos/dataPass';
import Childtoparentpass from './demos/childtoparentpass';
import CalcTheme from './calc/calc';
import UseEffectComp from './demos/useEffect';
import CompA from './contextapiexample/compA';
import Comp_useContext from './usecontexthooksexample/compA';
import ChangeBGHooks from './demos/changeBGHooks';
import ControlledVSUncontrolled from './demos/controlledComp';
import Dynamicsearch from './demos/dynamicSearch';
import ShoppingcartClass from './demos/shoppingcartclass';
import ShoppingcartFunctional from './demos/shoppingcartfunctional';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="leftbar">  
            From switch router            
            <ol>
                <li><Link to="">Home</Link></li>                
                <li><Link to="/datapass">Datapass Example</Link></li> 
                <li><Link to="/childtoparentpass">Child to parent data pass Example</Link></li>
                <li><Link to="/calc">Calculator</Link></li> 
                <li><Link to="/usestatehooks">Hooks useState Example</Link></li> 
                <li><Link to="/changebghooks">Change BG from useState</Link></li>
                <li><Link to="/useeffectexample">useEffect Example</Link></li> 
                <li><Link to="/contextapiexample">Context API example</Link></li>
                <li><Link to="/usecontextexample">useContext Example</Link></li>
                <li><Link to="/controlledvsuncontrolled">Controlled Vs Uncontrolled</Link></li>
                <li><Link to="/dynamicsearch">Dynamic Search</Link></li>
                <li><Link to="/shoppingcartclass">Shopping cart (class based)</Link></li>
                <li><Link to="/shoppingcartfunctional">Shopping cart (functional)</Link></li>
            </ol>
        </div>
        <div className="rightbar">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/usestatehooks">
              <UseStateHooksComp />
            </Route>
            <Route path="/changebghooks">
              <ChangeBGHooks />
            </Route>
            <Route path="/datapass">
              <DataPass />
            </Route> 
            <Route path="/childtoparentpass">
              <Childtoparentpass />
            </Route>
            <Route path="/calc">
              <CalcTheme />
            </Route> 
            <Route path="/useeffectexample">
              <UseEffectComp />
            </Route>    
            <Route path="/contextapiexample">
              <CompA />
            </Route>
            <Route path="/usecontextexample">
              <Comp_useContext />
            </Route>  
            <Route path="/controlledvsuncontrolled">
              <ControlledVSUncontrolled />
            </Route>
            <Route path="/dynamicsearch">
              <Dynamicsearch />
            </Route>
            <Route path="/shoppingcartclass">
              <ShoppingcartClass />
            </Route>
            <Route path="/shoppingcartfunctional">
              <ShoppingcartFunctional />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}


function App2() {
  return (
    <HashRouter>
      <div className="leftbar"> 
          from hash router     
          <ol>
            <li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="/usestatehooks">Hooks Example</NavLink></li>  
          </ol>      
      </div>
      <div className="rightbar">
          <Route exact path="/" component={Home} />
          <Route path="/usestatehooks" component={UseStateHooksComp} />        
      </div>
    </HashRouter>
  );
}

const Home = () => {
  return(
    <div>This is Home page</div>
  );
}

export default App;