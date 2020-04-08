import React from 'react';
import {Link} from 'react-router-dom'

import './styles/barral.css'

const barral = ({title})=>{

    return (

        <div className="barra">

            <div className="contenedor-barral">


            <div className="profile">

                <h5 className="account-category">{title}</h5>
                <img className="user-photo" src="https://lh3.googleusercontent.com/-dLKITLGmLHk/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJPF75INtZgajnbWtD79HRl5CB5jrg.CMID/s32-c/photo.jpg" alt="imagen-usuario"/>

            </div>
            
            <div className="botones">

                <ul className="botones-list">
                    <Link to ="/home" className="boton" >Home</Link>
                    <Link to="messages" className="boton" >Messages</Link>
                    <Link to="settings" className="boton" >Settings</Link>
                </ul>

            </div>

            </div>


        </div>



    )
;


}

export default barral;