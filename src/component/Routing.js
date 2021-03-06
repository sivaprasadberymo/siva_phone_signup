import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Postdata from'./Postdata';
const Routing=() => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <hr/>
          <BrowserRouter>
              <Route exact path="/" component={Postdata}/>
          
          </BrowserRouter>
      
    </div>
  );
}

export default Routing;
