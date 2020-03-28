import React from 'react';
import Empresa from './components/empresa'
import Barra from './components/barral'
import './app.css'
import SearchBar from './components/searchbar'
import Elemento from './components/elementoempre'


class App extends React.Component{

constructor(props){
  super(props)
  
 

  this.state={
    value:"Create",
    index: '',
    edito:0,
    empresasm:[]  
  }

}


createElement= (i) => {
  this.setState({value: "Create"})

  var g =  document.getElementById("namevalue").value;
  var n = document.getElementById("categoryvalue").value;
  var r=document.getElementById("contravalue").value;
  var s=document.getElementById("mailvalue").value;

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




render(){



  return (
    
    <div>
    <div className="content-organizer" >

      <div className="emergent" id="emergenteco">
        
        <div className="elemento-input">
            <h3 className="title-input" >Name</h3>

            <input type="text" className="inputs" id="namevalue" ref="nomcomp"/>

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

              <h3 className="cancel" onClick={()=>{ this.hideEmergent()}} >Cancel</h3>
              
  <h3 className="create" onClick= {()=>{ this.createElement() } } >{this.state.value}</h3> 
              


            </div>

        </div>



      </div>


    <Barra title="Administrator"/>
    <Empresa Empresa ="Don Pepe"   changeVariable={ () =>{ this.showEmergent() } }/>
    <div id="mostrar-empresas">

        <SearchBar className="hola" />
        <div className="companies-display">

       

        {
          this.state.empresasm.map((data,i)=>{
            return (
              <Elemento key={i} num ={i} empresap={data.title} handleRemove={()=>{this.handleRemove(i)}} categoria={data.category} handleEdit={(i)=>{ this.handleEdit(i) }} />

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

export default App;