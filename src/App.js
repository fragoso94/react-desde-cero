import React, {Fragment} from 'react';
//import logo from './logo.svg';
//import './App.css';
import Curso from './curso';
import "./styles/style.scss";


//const  App = () => <h1>Mi componente 1 :)</h1>;
const App = () => (
  <Fragment>
    <div classNameName="main-banner img-container" id="main-banner">
      <div classNameName="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="tu-imagen.jpg" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo del banner</p>
            <a className="button">Botón del banner</a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
    </div>
  </Fragment>
)

export default App;
