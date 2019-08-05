import React from 'react';
import PropTypes from 'prop-types';

import "../styles/style.scss";

const imagen = "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2019/06/07/platzi_invierte_en_silicon_valley_2.jpg?itok=O8rJuLG2";
const Alumno = ({nombre, edad, hobbie}) =>  (
    <article className="card df-left">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={imagen} alt="Sin imagen" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2 df-card-bg">
            <h3 className="t6 s-mb-3 s-center">
                {`Nombre: ${nombre}`}
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <span className="small">{`Edad: ${edad}`}</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny">{`Hobbie: ${hobbie}`}</a>
            </div>
        </div>
    </article>
)

Alumno.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    hobbie: PropTypes.string
}
Alumno.defaultProps = {
    nombre : "Nombre no encontrado",
    edad : "Edad no encontrada",
    hobbie: "no hay hobbies"
}

export default Alumno;