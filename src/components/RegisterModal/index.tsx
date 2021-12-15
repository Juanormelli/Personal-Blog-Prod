import { useEffect, useState } from "react"
import Modal from "react-modal"

import style from "./styles.module.scss"

import { registerUser } from "../../services/registerAPI";

interface RegisterModalProps{
    onRequestClose(): void;
    isOpen:boolean
}

let testes:any
export default function RegisterModal(props:RegisterModalProps){

    const [email, setEmail] = useState("")
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    function openModalClear(){
        setEmail("")
        setPassword("")
        setUser("")
        setMessage("")
    }
    
   
   const [message, setMessage] = useState("")
   
   
    async function teste () {
        testes = await registerUser({email, password, username:user})
        if( testes.statusCode!==200){
            setMessage(testes.data)
            
        }
        else{
            alert("Usuario Cadastrado com sucesso Parabens!")
            document.location = document.location
        }
        

    }
    useEffect(() => {
        
    
    }, [message]);

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
                    <h1 >Cadastrar-se</h1>
                    <input type="text" value={user} onChange={(event) => {setUser(event.target.value)}} placeholder="Usuario" />
                    <input type="email" value={email} onChange={(event) => {setEmail(event.target.value)}} placeholder="E-mail" />
                    <input type="password" value={password} onChange={(event) => {setPassword(event.target.value)}} placeholder="Senha" />

                    <small className={style['error']}>{message}</small>
                    <button  className={style['loginError']} onClick={teste}>Cadastrar</button>
                    
                </div>
               
            
            </Modal>
        
    )
    
}


