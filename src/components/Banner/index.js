import React from 'react'
import img  from '../../assets/imagem.svg'
import './styles.css'

const Banner = () => {
    return(
         <div className="main">
            <div>
                <h1>App divertido</h1>
                <p>Site feito em React para treinar react-router-dom e axios</p>
            </div>
            <img src={img} alt="ilustracao com logo do react" />
        </div>
    )
}
export default Banner