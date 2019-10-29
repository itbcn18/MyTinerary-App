//  Página de componente principal (Componente Route). Todo lo que queremos que salga, tiene que estar vinculado a este archivo "App.js"

import React, {Component} from 'react';
import './App.css';

// Se importan también todas las páginas/componentes que se crean en esta page "App.js"
import Home from './components/home';
import Users from './components/users'
import Footer from './components/footer';
import Header from './components/header';
import {BrowserRouter, Switch, Route} from "react-router-dom";  // Va a manejar todas las rutas de la aplicación desde esta página. Switch = Cambia las vistas

class App extends Component {
  render(){
  return (    // Dentro también se va a crear el Router que se va a encargar de indicar todas las rutas de la aplicación  <BrowserRouter>

    // Se define "Header y Footer" porque estos componentes sí estarán presentes en todas las páginas. El orden en que se colocan los componentes importa, ya que así se presentarán

    /*  Los componentes van fuera de las vistas de (rutas - BrowserTouter) y las vistas dentro del BrowserRouter.  Se crean files ".js" que corresponderán a vistas y a componentes.   EL BrowserRouter carga todas las rutas y debe de englobar toda la app     */
    
      
      <BrowserRouter>  

        <div className="App">
          <Header/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/users" component={Users}/>
          </Switch>
          <Footer/>
        </div> 
        
      </BrowserRouter>

    
  );
}

}
export default App;
