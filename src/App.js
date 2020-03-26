import React from 'react';

// Assets
import './App.css';
import './assets/Css/style.scss'

// Header
import Menu from './Components/Top/menu';

// Router do React
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import NossaHistoria from './Pages/NossaHistoria';
import Casamento from './Pages/Casamento';
import GaleriaFotos from './Pages/GaleriaFotos';
import FaleConosco from './Pages/FaleConosco';

//Footer
import Footer from './Components/Footer/Footer';

function changeTitle(){
  document.title =  "TaciLe"
}

const App = () => {
  changeTitle();
  return <>
    <Router >
      <Menu/>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/NossaHistoria" component={NossaHistoria} />
        <Route path="/Casamento" component={Casamento} />
        <Route path="/GaleriaFotos" component={GaleriaFotos} />
        <Route path="/FaleConosco" component={FaleConosco} />
      </Switch>
    </Router>
    <Footer/>
  </>
}

export default App;
