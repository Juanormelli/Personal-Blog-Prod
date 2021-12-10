import { useState } from "react"
import Modal from "react-modal"

import style from "./styles.module.scss"
import axios from "axios";

interface RegisterModalProps{
    onRequestClose(): void;
    isOpen:boolean
}

export default function RegisterModal(props:RegisterModalProps){

    const [email, setEmail] = useState("")
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    function openModalClear(){
        setEmail("")
        setPassword("")
        setUser("")
    }

    return (
        <Modal 
            isOpen={props.isOpen} 
            onRequestClose={props.onRequestClose}
            overlayClassName= "react-modal-overlay"
            className= "react-modal-content"
            onAfterClose={openModalClear}
            ariaHideApp={false}
            >

                <div className={style['modal-container']}>
                    
                    <button className={style['modal-close']} type="submit" onClick={props.onRequestClose}>✖</button>
                    <h1 >Login</h1>
                    <input type="text" value={user} onChange={(event) => {setUser(event.target.value)}} placeholder="Usuario" />
                    <input type="email" value={email} onChange={(event) => {setPassword(event.target.value)}} placeholder="E-mail" />
                    <input type="password" value={password} onChange={(event) => {setPassword(event.target.value)}} placeholder="Senha" />

                    <small className={style['error']}>{}</small>
                    <button  className={style['loginError']} onClick={Register()} >Cadastrar</button>
                    
                </div>
               
            
            </Modal>
        
    )
    
}



// async function Register (){

//     axios.


// }