import React from 'react';
import "./styles/style.scss";

const Curso = () => (
    <article classNameName="card">
        <div classNameName="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src="path/img" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="t5 s-mb-2 s-center">
            Programación orientada a objetos con Go
          </h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src="path/img" />
              </div>
            </div>
            <span className="small">Alexys Lozada</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny">$ 20USD</a>
        </div>
      </div>
    </article>
)

export default Curso;