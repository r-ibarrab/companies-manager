import React from 'react';
import './styles/emergent.css'



const hola=()=>{

    return {
        "name":document.getElementById("namevalue").value,
        "category":document.getElementById("categoryvalue").value,
        "mail":document.getElementById("mailvalue").value,
        "password":document.getElementById("contravalue").value,
    
        }
   
   
}

const emergent = (props)=>{

return (

<div className="emergent" id="emergenteco">
        
        <div className="elemento-input">
            <h3 className="title-input" >Name</h3>

            <input type="text" className="inputs" id="namevalue" />

        </div>
        <div className="elemento-input">
            <h3 className="title-input">Category</h3>

            <input type="text" className="inputs" id="categoryvalue"/>

        </div>
        <div className="elemento-input">
            <h3 className="title-input">Mail</h3>
            <input type="mail" className="inputs" id="mailvalue"/>
        </div>

        <div className="elemento-input">
            <h3 className="title-input">Contraseña</h3>
            <input type="password" className="inputs" id="contravalue"/>
        </div>

        <div className="container-botones-cc" > 

            <div className="botones-create-cancel" >

              <h3 className="cancel" onClick={()=>{ props.hideEmergent()}} >Cancel</h3>
              
              <h3 className="create" onClick= {()=>{ 
                  
                 let data = hola();
                  props.createElement(data) } } >{props.value}</h3> 
              


            </div>

        </div>



      </div>


)


}


export default emergent;