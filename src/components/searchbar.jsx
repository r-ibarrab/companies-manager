import React from 'react';
import './styles/searchbar.css'

const searchbar = () =>{

return(

    <div className="inputcontent-container">
        <div className="input-container">
            <img className="lupa" src="https://images.vexels.com/media/users/3/140723/isolated/preview/158241d2079a635fb0cae49accb56da5-icono-de-lupa-by-vexels.png" alt="no esta imagen" />
        <input id ="input" placeholder="Search" />
        </div>

        <div className="boton-filter"> 
         Filter
        </div>
            


    </div>

)


}

export default searchbar;