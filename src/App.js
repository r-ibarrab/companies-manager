import React from 'react'
import Layout from './components/layout'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import './layout.css'
const App = ()=>{

return(

  <div>
    <BrowserRouter>
    <Layout id="layout1">
    <Switch id="layout1">

      <Route exact path="/home" component={Home}/>

    </Switch>
    
    </Layout>
    
    </BrowserRouter>


  </div>



)


}



export default App;