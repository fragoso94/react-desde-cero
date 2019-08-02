import React, {Fragment} from 'react';
//import logo from './logo.svg';
//import './App.css';
import Curso from './curso';
import Banner from './banner';
import Boton from './boton';
import "./styles/style.scss";


//const  App = () => <h1>Mi componente 1 :)</h1>;
//const imagen = "https://strc.guanajuato.gob.mx/wp-content/uploads/2019/06/BANNER-MR-01.jpg";
const imagen = "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2019/06/07/platzi_invierte_en_silicon_valley_2.jpg?itok=O8rJuLG2";
const App = () => (
  <Fragment>
      <Banner />
      <div className="ed-grid s-grid-4">
          <div>
              <Boton titulo = "Documentación" />
              <div className="df-box">
                  <img src={imagen} alt="Imagen"/>
              </div>
          </div>
          <div className="s-cols-3">
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
                          titulo = "Firebase con android"
                          img = "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/firebase-android.png"
                          precio = "8 USD"
                          profesor = "Juan Guillermo Gómez"
                      />
                  </div>
                  <div className="m-order-1 lg-order-2">
                      <Curso
                          titulo = "CEO Avanzado"
                          img = "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-06/SEO%20Avanzado.png"
                          precio = "15 USD"
                          profesor = "Martin Arzuaga"
                      />
                  </div>
                  <div className="m-order-1 lg-order-2">
                      <Curso
                          titulo = "Android con Webservices"
                          img = "https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2019-01/Android%20Webservice.png?itok=ZOCP4JVV"
                          precio = "20 USD"
                          profesor = "José dimas Luján"
                      />
                  </div>
                  <div className="m-order-2 lg-order-3">
                      <Curso
                          titulo = "Conmutación de redes"
                          img = "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Redes%20Conmutacion.png"
                          precio = "25 USD"
                          profesor = "Paula León"
                      />
                  </div>
                  <div>
                      <Curso
                          titulo = "Dart desde cero"
                          img = "https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2019-01/Android%20Kotlin.png?itok=q7Du9KgK"
                          precio = "13 USD"
                          profesor = "Hansy Schmitt"
                      />
                  </div>
              </div>
          </div>
      </div>


  </Fragment>
)

export default App;
