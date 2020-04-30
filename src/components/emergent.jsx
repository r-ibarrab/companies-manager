import React from 'react';
import './styles/emergent.css'



const hola=async ()=>{

  
        let data= {
            "title":document.getElementById("namevalue").value,
            "category":document.getElementById("categoryvalue").value,
            "mail":document.getElementById("mailvalue").value,
            "password":document.getElementById("contravalue").value,
        
            };
        console.log(JSON.stringify(data))


        await fetch('http://localhost:5000/api/companies', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }

        })

        console.log('ya se mando')
}

const handleEdit=async (i)=>{

    console.log(i)
    let newdata= {
        "title":document.getElementById("namevalue").value,
        "category":document.getElementById("categoryvalue").value,
        "mail":document.getElementById("mailvalue").value,
        "password":document.getElementById("contravalue").value,
    
        };

        console.log('entra a editarse')
  
    await fetch(`http://localhost:5000/api/companies/${i}`,{
      method:'PUT',
      body:JSON.stringify(newdata),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    console.log('ya se edito')
   
  

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
              
              <h3 className="create" onClick= { async ()=>{ 
                  
                if( props.value ==="Create"){
                    await hola();
                }
                else{
                    console.log(props)
                    console.log(props.companyid)

                    await handleEdit(props.companyid);
                    console.log('porfinsali')
                }
                
                console.log('despues de editarse o crearse')
                console.log(props);
                props.hideEmergent();


                props.refresh();
                 
                } } >{props.value}</h3> 
              


            </div>

        </div>



      </div>


)


}


export default emergent;