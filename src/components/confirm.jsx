import React from 'react';
import './styles/confirm.css'

const confirm = (props)=>{

    return (

        <div className="hola123" id="hola123">
                <div className="recuadro">

                    <h1>¿Deseas eliminar esta empresa?</h1>

                    <div className="botones123">

                        <h2 onClick={()=>{props.accept()}}> Accept </h2>
                        <h2 onClick={props.cancel}> Cancel </h2>


                    </div>

                </div>


        </div>


    )




}

export default confirm;