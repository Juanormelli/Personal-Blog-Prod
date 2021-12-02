
import Modal from "react-modal"
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/client'

import style from "../Modal/styles.module.scss"


interface ModalProps {
    onRequestClose : () => void;
    isOpen: boolean;


}



export default function ModalLogin(props:ModalProps) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    function openModalClear(){
        setPassword("")
        setEmail("")
    }
    const [session] = useSession()

    console.log(session)

    function handleLogin() {
        try{
            signIn("credentials",
        {
            username:email,
            password:password,

            callbackUrl:window.location.origin

            
        })
        }
        catch(err){
            alert("Erro")
            
            
        }
        
    }



    

    return(
   
        <Modal 
        isOpen={props.isOpen} 
        onRequestClose={props.onRequestClose}
        overlayClassName= "react-modal-overlay"
        className= "react-modal-content"
        onAfterClose={openModalClear}
        >
            <div className={style['modal-container']}>
                <button className={style['modal-close']} type="submit" onClick={props.onRequestClose}>✖</button>
                <h1 >Login</h1>
                <input type="text" value={email} onChange={(event) => {setEmail(event.target.value)}} placeholder="E-mail" />
                <input type="password" value={password} onChange={(event) => {setPassword(event.target.value)}} placeholder="Senha" />
                <button type="button"onClick={handleLogin} >Login</button>
                <div >
                    <p>Nao possui cadastro ainda? Clique aqui</p>
                    <button className={style['register-button']} >Cadastre-se</button>
                </div>
            </div>
        
        </Modal>
    
    )


} 