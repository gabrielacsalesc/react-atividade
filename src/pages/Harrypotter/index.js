import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'

import Axios from 'axios'
import './styles.css'

const Harrypotter = () => {
    const [personagem, setPersonagem] = useState([])
    const [clique, setClique] = useState(()=>{})
    
    useEffect(()=>{
        const pegaDados = async ()=> {
            const resposta = await Axios.get('http://hp-api.herokuapp.com/api/characters')
            const dados = await resposta.data
            setPersonagem(dados)
        }
        pegaDados()
    },[clique])

    function ligaClique(){
        setClique(personagem)
    }

    return (
        <>
            <Menu />
            <div className="main-harry">
                {personagem.map(perso => {
                    return(
                        <div className="card-harry">
                            <p>{perso.name}</p>
                            <img src={perso.image} alt="personagem harrypotter"/>
                        </div>
                        
                    )
                })}
                <button onClick={ligaClique}>Clique para trocar o personagem</button>
            </div>
        </>
    )
}

export default Harrypotter