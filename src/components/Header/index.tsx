
import{FiX} from "react-icons/fi"
import{GoPerson} from "react-icons/go"
import{MdLogin} from "react-icons/md"
import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";
import { signOut, useSession } from "next-auth/client";
import { useEffect } from "react";



interface HeaderProps{ 
    onOpenLoginModal: () => void;
}

export default function Header(props: HeaderProps){
    
    const [session] = useSession()
    

    const sessionCustomized:any = session?.user

   
   
    if(session){
        return (
            <header className={styles.headerContainer}>
                <div className={styles.headerContent}> 
                    <img src="/images/logo.svg" alt="Logo" />
                    <nav>
                        <ActiveLink activateClassname={styles.active} href="/" >
                            <a >Home</a>
                        </ActiveLink>
                        <ActiveLink activateClassname={styles.active} href="/posts" >
                            <a>Posts</a>
                        </ActiveLink>
                        
                    </nav>
                    
                    <button className={styles.signinButton}onClick={()=>signOut()}>
                    <GoPerson color ="#04d361"/>
                    {sessionCustomized?.user?.username}
                    <FiX color="#737380" className={styles.closeIcon}/>
                    </button>
                    
                    
                </div>
            </header>
        )
    }
    else{
        return (
            <header className={styles.headerContainer}>
                <div className={styles.headerContent}> 
                    <img src="/images/logo.svg" alt="Logo" />
                    <nav>
                        <ActiveLink activateClassname={styles.active} href="/" >
                            <a >Home</a>
                        </ActiveLink>
                        <ActiveLink activateClassname={styles.active} href="/posts" >
                            <a>Posts</a>
                        </ActiveLink>
                        
                    </nav>
                    
                    <button onClick={props.onOpenLoginModal} className={styles.signinButton}>Login
                    <MdLogin className={styles.closeIcon}/>
                    </button>
                    
                    
                </div>
            </header>
        )

    }
    

}