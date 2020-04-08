import React from 'react';
import Barra from './barral';
import './styles/barralayout.css'


const Layout = (props)=>{

    return (

        <div id ="elmain">
               
                    <Barra />
                    <div>
                    {props.children}
                    </div>

                
        </div>

    )





}

export default Layout;