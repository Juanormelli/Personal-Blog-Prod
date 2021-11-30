import type { NextPage } from 'next'
import  Head  from 'next/head'


import React from 'react'
import styles from './home.module.scss'


const Home: NextPage = () => {
  return (
    <>
     <Head>
        <title>Home | TECH POSTS</title>
      </Head>

   
    
    <main className={styles.contentContainer}> 
        <section className={styles.hero}>
          <span>TECH POSTS <br/> <p>Seu blog sobre tecnologia e inovação!</p></span>
          <h1>Está pronto para embarcar? 🚀</h1>
          <p>
            Conteúdo totalmente voltado para tecnologia!
          <br/>
          
          </p>
      
        
        </section>
        <img src="/images/Saly-1.svg"alt="Rocket" />
       
        
      </main>
    
    </>


  )
}

export default Home
