import React from 'react';
import "./styles/style.scss";


//función JS ES6
//const mayorDeEdad = edad => edad >18;
//const persona = {"nombre": "daniel fragoso", "edad": 18};
const curso =
    {
        "titulo": "Curso de react",
        "img": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
        "precio": "250 MXN"
    }
const Curso = () => (
    <article classNameName="card">
        <div classNameName="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src={curso.img} alt={curso.titulo} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                {curso.titulo}
            </h3>
            {/*<h3 className="t5 s-mb-2 s-center">
              {`Autor ${persona.nombre}`}
            </h3>
            <h4>
                { mayorDeEdad(persona.edad) ? "Soy mayor de edad!" : "No soy mayor de edad."}
            </h4>*/}
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src="path/img" />
              </div>
            </div>
            <span className="small">{}</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny">{`$ ${curso.precio}`}</a>
        </div>
      </div>
    </article>
)

export default Curso;