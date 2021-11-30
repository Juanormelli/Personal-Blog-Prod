import type { NextPage } from 'next'


import styles from './home.module.scss'


const Home: NextPage = () => {
  return (
    <>
   
    
    <main className={styles.contentContainer}> 
        <section className={styles.hero}>
          <span></span>
          <h1>Boost Your Future 🚀</h1>
          <p>
            
          </p>
        
        </section>

        <img src="/images/Saly-1.svg"alt="Rocket" />
        
      </main>
    
    </>


  )
}

export default Home
