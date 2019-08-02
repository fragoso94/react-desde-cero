import React, {Fragment} from 'react';
//import React from 'react';
import "./styles/style.scss";

const imagen = "https://strc.guanajuato.gob.mx/wp-content/uploads/2019/06/BANNER-MR-01.jpg";
const Banner = () => (
    <Fragment>
        <div>
            <ul className="ed-menu l-horizontal button-bar df-sin-espacio">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Especialidades</a></li>
                <li><a href="#">Cursos</a></li>
                <li><a href="#">Quienes somos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
        {/*<div className="ed-grid lg-grid-3">
        <div className="s-cols-3 ed-grid s-grid-3 rows-gap">
            <div className="s-cols-3">
                <div className="main-banner img-container" id="main-banner">
                    <div className="ed-grid lg-grid-6">
                        <div className="lg-cols-4 lg-x-2">
                            {//className="main-banner__img"}
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
        </div>*/}
    </Fragment>
)

export default Banner;