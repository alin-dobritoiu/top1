import { Route, Switch } from 'react-router-dom';
import './App.css';
import './App.scss'
import Home from './components/Home';
import Navbar from './components/NavBar'
import News from './components/News';
import { Registrations } from './components/Registrations'
import Store from './components/PayPal'





function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path ="/" exact>
          <Home/>
        </Route>
        <Route path ="/news" component={News}/>
        <Route path="/getimps" component={Store}/>
        <Route path="/register" component={Registrations}/>
       
      </Switch>

    </div>
  );
}

export default App;
