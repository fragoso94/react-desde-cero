import React, {Fragment} from 'react';
//import logo from './logo.svg';
//import './App.css';
import Curso from './curso';
import "./styles/style.scss";


//const  App = () => <h1>Mi componente 1 :)</h1>;
const imagen = "https://strc.guanajuato.gob.mx/wp-content/uploads/2019/06/BANNER-MR-01.jpg";
const App = () => (
  <Fragment>
      <div>
          <ul className="ed-menu l-horizontal button-bar">
              <li><a href="#">Item</a></li>
              <li><a href="#">Item</a></li>
              <li><a href="#">Item</a></li>
              <li><a href="#">Item</a></li>
          </ul>
      </div>
      <div className="ed-grid lg-grid-3">
          {/*ed-grid rows-gap s-grid-2 m-grid-4 lg-grid-6*/}
          <div className="s-cols-3 ed-grid s-grid-3 rows-gap">
              <div className="s-cols-3">
                  <div className="main-banner img-container" id="main-banner">
                      <div className="ed-grid lg-grid-6">
                          <div className="lg-cols-4 lg-x-2">
                              {/*className="main-banner__img"*/}
                              <img src={imagen} />
                              <div className="main-banner__data s-center">
                                  <p className="t2 s-mb-0 df-text-bg">Título del banner</p>
                                  <p className="df-text-bg"> Subtítulo del banner</p>
                                  <a href="#" className="button--ghost--dark">Botón del banner</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="ed-grid s-grid-4 espacio">
          <div className="m-order-2 lg-order-3">
              <Curso
                  titulo = "React desde cero"
                  img = "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png"
                  precio = "10 USD"
                  profesor = "Alberto quiroga"
              />
          </div>
          <div className="m-order-3 lg-order-1">
              <Curso
                  titulo = "Curso de angular"
                  img = "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png"
                  precio = "8 USD"
                  profesor = "Alberto quiroga"
              />
          </div>
          <div className="m-order-1 lg-order-2">
              <Curso
                  titulo = "Curso de react native"
                  img = "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png"
                  precio = "15 USD"
                  profesor = "Alvaró felipe"
              />
          </div>
          <div className="m-order-1 lg-order-2">
              <Curso
                  titulo = "Curso de Flutter"
                  img = "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png"
                  precio = "20 USD"
                  profesor = "Jose dimas lujan"
              />
          </div>
          <div className="m-order-2 lg-order-3">
              <Curso
                  titulo = "Curso de android"
                  img = "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png"
                  precio = "25 USD"
                  profesor = "Daniel Fragoso"
              />
          </div>
      </div>

  </Fragment>
)

export default App;
