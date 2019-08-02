import React from 'react';
import "./styles/style.scss";


const Boton = props =>
    (
        <a className="button ghost light-color df-espacio-abajo">{props.titulo}</a>
    )
export default Boton;