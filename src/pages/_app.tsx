import {AppProps} from "next/app"
import  Header  from "../components/Header"
import "../styles/globals.scss"
import {getSession, Provider, useSession} from 'next-auth/client'
import React, { useState } from "react"
import Modal from "../components/Modal"
import { NextApiResponse } from "next"
import RegisterModal from "../components/RegisterModal"


function MyApp({ Component, pageProps }: AppProps) {
  const [isNewLoginModalOpen, setIsNewLoginModalOpen] = useState(false)
  const [isNewRegisterModalOpen, setIsNewRegisterModalOpen] = useState(false)

 

  
    function handleOpenNewLoginModal(){
        setIsNewLoginModalOpen(true)
    }

    function handleCloseNewLoginModal(){
        setIsNewLoginModalOpen(false)
    }

    function handleOpenNewRegisterModal(){
      setIsNewRegisterModalOpen(true)
  }

  function handleCloseNewRegisterModal(){
      setIsNewRegisterModalOpen(false)
  }
    async function userSession() {
      const session = await getSession()
      
      
      return session
    }
    
    const session = userSession()
    pageProps.session = session
    

  return (
      <Provider session={pageProps.session} >
        <Header onOpenLoginModal={handleOpenNewLoginModal}></Header>
        <Component {...pageProps} />  
        <Modal isOpen={isNewLoginModalOpen} onRequestClose={handleCloseNewLoginModal} onOpenRegisterModal={handleOpenNewRegisterModal}></Modal>
        <RegisterModal isOpen={isNewRegisterModalOpen} onRequestClose={handleCloseNewRegisterModal}></RegisterModal>
      </Provider>
  )  
}



export default MyApp
