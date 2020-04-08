import React from 'react';
import './styles/empresa.css'

const empresa = (props)=>{

return(

<div>

<div className="container-empresa">

          

        

                    <div className="title-empresa">
                        <h1>{props.Empresa}</h1>
                    </div>

                    <div className="mensajes">
                        <h2>Recent Messages</h2>
                    </div>
                    
                    {/* Funcion para ver si hay mensajes, (poner ultimos 3) */}
                    
                    <div className="mensajes-provicional">
                        <h2> No hay mensajes</h2>
                    </div>
                    

                    <div className="new" >

                        <h3 className="new-title"  onClick={ () =>{ props.changeVariable() } } >New <strong className="mas">+</strong></h3>


                    </div>
                    

</div>
</div>

)

}

export default empresa;