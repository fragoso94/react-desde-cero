import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import App from './App';


const root = document.getElementById("root");
//const elemtento = React.createElement(componente, propiedades, hijos);
//const elemento = React.createElement("H1", {className: "saludo"}, "Hola mundo" );
let elemento = <h1 className="saludo">Hola</h1>;

ReactDOM.render(<App />, root);


//serviceWorker.unregister();
