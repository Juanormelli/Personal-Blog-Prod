


import styles from "./styles.module.scss";

import { useRouter } from "next/router";
import { ActiveLink } from "../ActiveLink";

export default function Header(){
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

                
                
            </div>
        </header>
    )

}