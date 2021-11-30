
import styles from "./styles.module.scss"
import {signIn,signOut, useSession} from "next-auth/client"

export function SigninButton(){
    const[session]= useSession()

    
    console.log(session)

   return session?(
        <button type="button" className={styles.signinButton} onClick={()=>signOut()}>
           
            Juan Ormelli
            
        </button>
    ):  
    (
        <button type="button" className={styles.signinButton} onClick={() => signIn('github')}>
           

            Login
            
        </button>
    )
    
       

}