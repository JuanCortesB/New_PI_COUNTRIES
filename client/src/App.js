import './App.css';
import Home from './components/Home';
// import Navbar from './components/Navbar/Navbar';
// import {Form} from './components/Form/Form';
import Landing from './components/Landing';
import { Route} from "react-router-dom";
import CreateActivity from './components/CreateActivity';
import Details from './components/Details';

function App() {
  return (
    
   <div className="App">
    
    <Route exact path="/">
      <Landing/>
      
    </Route> 

    <Route  path="/home">
      <Home/>
      
    </Route> 
    
    <Route  path="/countries/:id"  >
    <Details  />
    </Route>
    <Route path="/activities">

    <CreateActivity/>
    </Route>
    
    {/* <Route exact path="/home" component={Form}/> */}
   
  
  


    </div>


  );
}

export default App;
