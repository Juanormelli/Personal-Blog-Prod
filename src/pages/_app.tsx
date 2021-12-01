import {AppProps} from "next/app"
import  Header  from "../components/Header"
import "../styles/globals.scss"
import {Provider as NextAuthProvider} from "next-auth/client"
import React, { useState } from "react"
import Modal from "../components/Modal"


function MyApp({ Component, pageProps }: AppProps) {
  const [isNewLoginModalOpen, setIsNewLoginModalOpen] = useState(false)

  

    function handleOpenNewLoginModal(){
        setIsNewLoginModalOpen(true)
    }

    function handleCloseNewLoginModal(){
        setIsNewLoginModalOpen(false)
    }

  return (
    <>
      <Header onOpenLoginModal={handleOpenNewLoginModal}></Header>
      <Component {...pageProps} />  
      <Modal isOpen={isNewLoginModalOpen} onRequestClose={handleCloseNewLoginModal}></Modal>
    </>
  )  
}

export default MyApp
