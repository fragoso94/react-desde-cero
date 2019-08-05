import React, {Fragment} from 'react';
import Alumno from './alumno';


import "../styles/style.scss";

class AlumnosApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = { alumnos: [] }
    }

    componentWillMount() {
        fetch('http://127.0.0.1:8000/api/alumnos')
            .then((response) => {
                //console.log(response);
                return response.json();
            })
            .then((alumnos) => {
                this.setState({ alumnos: alumnos })
            })
    }

    render() {
        let data =  this.state.alumnos;
        if (data.length > 0) {
            console.log(data);
            return (
                <div className="s-cols-3">
                    <div className="ed-grid m-grid-3 espacio">
                        {
                            data.map( c =>
                                <Alumno nombre={c.nombre} edad={c.edad} hobbie={c.hobbie} />
                            )
                        }
                    </div>
                </div>
            )
        } else {
            return <p className="text-center">Cargando alumnos...</p>
        }
    }

}

export default AlumnosApp;