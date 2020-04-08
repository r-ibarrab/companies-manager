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
    index: '',
    edito:0,
    empresasm:[]  
  }

}


createElement= (data) => {
  this.setState({value: "Create"})

  var g =  data.name;
  var n = data.category;
  var r= data.mail;
  var s=data.password;

  var companies =this.state.empresasm

  if(this.state.edito == 0){

    if (g!== "" && n!== ""){
      
      var newcompany = {title:g,category:n,mail:s,password:r}
      companies.push(newcompany)
    }

  }else{

    var index = this.state.index;
    companies[index].title= document.getElementById("namevalue").value;
    companies[index].category=document.getElementById("categoryvalue").value;
    companies[index].mail= document.getElementById("mailvalue").value;
    companies[index].password=document.getElementById("contravalue").value;


  }
  
    this.setState({empresasm: companies,
      edito:0})
  
  document.getElementById("namevalue").value="";
  document.getElementById("categoryvalue").value="";
  document.getElementById("contravalue").value="";
  document.getElementById("mailvalue").value="";
  
  this.hideEmergent();

  
   
}


handleRemove = i =>{
  var newcompanies = this.state.empresasm;
  newcompanies.splice(i,1)
  this.setState({
  })
}

handleEdit = i =>{

  this.setState({value: "Accept"})

  this.showEmergent()

  var newcompany = this.state.empresasm[i]
  document.getElementById("namevalue").value= newcompany.title
  document.getElementById("categoryvalue").value=newcompany.category
  document.getElementById("mailvalue").value= newcompany.mail
  document.getElementById("contravalue").value= newcompany.password


  this.setState({
    index:i,
    edito:1
  })
  


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
  this.setState({eliminate:i})
  document.getElementById("hola123").style.display="block";

}

accept = () =>{

this.handleRemove(this.state.eliminate)
document.getElementById("hola123").style.display="none";


}

cancel = ()=>{

document.getElementById("hola123").style.display="none";

}



render(){



  return (
    
    <div className="aquiestoy">
      <Confirmation id="confirmation" accept={()=>{this.accept()}}  cancel={()=>{this.cancel()}}  />
      <Emergent id= "emergenteco" hideEmergent={()=>{this.hideEmergent()}} createElement={(data)=>{ this.createElement(data)}}  value={this.state.value}/>

    <div className="content-organizer" >

    
    <Empresa Empresa ="Don Pepe"   changeVariable={ () =>{ this.showEmergent() } }/>
    <div id="mostrar-empresas">

        <SearchBar className="hola" />
        <div className="companies-display">

       

        {
          this.state.empresasm.map((data,i)=>{
            return (
              <Elemento key={i} num ={i} empresap={data.title} handleRemove={()=>{this.confirmation(i)}} categoria={data.category} handleEdit={(i)=>{ this.handleEdit(i) }} />

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