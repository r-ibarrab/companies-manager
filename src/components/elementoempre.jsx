
import React from 'react';
import './styles/elementoempre.css'
const elementoempre = (props) =>{

return(

        <div className="elementoemp">
            <div className="conteneemp">
                <div className="empresa-profile" >
                    <h2>{props.empresap.charAt(0).toUpperCase()}</h2>
                </div>
                <div className="empresa-title">
                    <h2> {props.empresap} </h2>
                </div>
                <div className="category-empresa">
                        <h3>Category: {props.categoria}</h3>
                </div>
                <div className="buttons">
                <h4 className="button" onClick={()=>{ props.handleEdit(props.num) }}>
                    Edit
                </h4>
                <h4 className="button" onClick={props.handleRemove}>
                    Delete
                </h4>
                </div>
            </div>
        </div>

    )

}

export default elementoempre;

