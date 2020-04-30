import React from 'react';
import Empresa from '../components/empresa'

import '../app.css'
import SearchBar from '../components/searchbar'
import Elemento from '../components/elementoempre'
import Emergent from '../components/emergent'
import Confirmation from '../components/confirm'


class home extends React.Component{

constructor(props){
  super(props)
  
 

  this.state={
    eliminate:'',
    value:"Create",
    edito: '',
    empresasm:[]  
  }



  
}



componentDidMount(){
  this.getCompanies();

}


editar(data){
  
  this.setState({value: 'Accept'})
  this.setState({edito: data._id})

  document.getElementById("emergenteco").style.display="block";
  document.getElementById("namevalue").value=data.title;
  document.getElementById("categoryvalue").value=data.category;
  document.getElementById("mailvalue").value=data.mail;
  document.getElementById("contravalue").value=data.password;

  

}


  async getCompanies(){



   await fetch('http://localhost:5000/api/companies')
  .then(response =>response.json())
  .then(data =>{
    console.log('hola',data)
    this.setState({empresasm:[]})
    this.setState({empresasm:data})
  })
  .catch(e=>{
    console.error(e)
    console.log("hubo un error")
  })
  console.log('refresque')
  // const data= response.json
  // const fdata = JSON.stringify(data)


}





 async handleRemove(i){
  
  console.log('id', i)
  await fetch(`http://localhost:5000/api/companies/${i}`, {
    method:'DELETE',
    headers:{
      'Accept': 'application/json',
      'Content-Type':'application/json'
    }
  })
  
    console.log('hola',i)
  
    await this.getCompanies();

    console.log('YA SE ELIMINO')

    this.setState({eliminate: ''});


}

showEmergent= ()=>{

  document.getElementById("emergenteco").style.display="block";
}

hideEmergent = ()=>{
  document.getElementById("emergenteco").style.display="none";
  document.getElementById("namevalue").value="";
  document.getElementById("categoryvalue").value="";
  document.getElementById("contravalue").value="";
  document.getElementById("mailvalue").value="";
}

confirmation= (i)=>{
  console.log(i)
  this.setState({eliminate:i})

  document.getElementById("hola123").style.display="block";

}

accept =  () =>{

  document.getElementById("hola123").style.display="none";
  this.handleRemove(this.state.eliminate);


}

cancel = ()=>{

document.getElementById("hola123").style.display="none";

}



render(){



  return (
    
    <div className="aquiestoy">
      <Confirmation id="confirmation" accept={()=>{ this.accept()}}  cancel={()=>{this.cancel()}}  />
      <Emergent id= "emergenteco" refresh={ ()=>{ this.getCompanies()} } hideEmergent={()=>{this.hideEmergent()}} createElement={(data)=>{ this.createElement(data)}}  companyid={this.state.edito} value={this.state.value}/>

    <div className="content-organizer" >

    
    <Empresa Empresa ="Don Pepe"   changeVariable={ () =>{ this.showEmergent() } }/>
    <div id="mostrar-empresas">

        <SearchBar className="hola" />
        <div className="companies-display">

       

        {
        

          this.state.empresasm.map((company,i)=>{
            return (
              <Elemento key={i} num ={i} empresap={company.title} handleRemove={()=>{this.confirmation(company._id)}} categoria={company.category} handleEdit={(i)=>{ this.editar(company) } }  compania={company}/>

            )
          })

        }
       
        </div>
        
    </div>
    
    </div>

  </div>
)

}
}


export default home;