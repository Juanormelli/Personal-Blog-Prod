import { useEffect, useState } from "react"
import Modal from "react-modal"

import style from "./styles.module.scss"
import axios from "axios"

interface RegisterModalProps{
    onRequestClose(): void;
    isOpen:boolean
}


interface IRegisterUser{
    username: string;
    email: string;
    password: string;
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
    
    async function registerUser({email, password, username}:IRegisterUser) {
        const response = await axios.post('http://18.231.81.185:80/users', {email: email, password: password, username:username}).then(response => {return response}).catch(response => {return response;})
        if (response.data !== undefined) {
            const responseSucess  = {
                data: "Congrats the user register sucsess",
                statusCode: 200
            }
            return responseSucess
        }
        else {
            const responseError = {
                data: response.response.data.message,
                statusCode: 400
            }
            return responseError
        }
        
        
    
    
    
    }
   
   const [message, setMessage] = useState("")
   
   
    async function teste () {
        testes = await registerUser({email, password, username:user})
        if( testes.statusCode!==200){
            setMessage(testes.data)
            console.log(message)
            
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



