import type { NextPage } from 'next'


import styles from './home.module.scss'
import Header from './../components/Header/index';

const Home: NextPage = () => {
  return (
    <>
    <Header/>
    
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
