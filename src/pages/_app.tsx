import {AppProps} from "next/app"
import  Header  from "../components/Header"
import "../styles/globals.scss"
import {Provider as NextAuthProvider} from "next-auth/client"


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />  
    </>
  )  
}

export default MyApp
