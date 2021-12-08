import {AppProps} from "next/app"
import  Header  from "../components/Header"
import "../styles/globals.scss"
import {getSession, Provider, useSession} from 'next-auth/client'
import React, { useState } from "react"
import Modal from "../components/Modal"
import { NextApiResponse } from "next"


function MyApp({ Component, pageProps }: AppProps) {
  const [isNewLoginModalOpen, setIsNewLoginModalOpen] = useState(false)

 

  
    function handleOpenNewLoginModal(){
        setIsNewLoginModalOpen(true)
    }

    function handleCloseNewLoginModal(){
        setIsNewLoginModalOpen(false)
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
        <Modal isOpen={isNewLoginModalOpen} onRequestClose={handleCloseNewLoginModal}></Modal>
      </Provider>
  )  
}



export default MyApp
