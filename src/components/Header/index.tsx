

import { SigninButton } from "../SigninButton";
import styles from "./styles.module.scss";

import { useRouter } from "next/router";
import { ActiveLink } from "../ActiveLink";

export default function Header(){
    return (
<header className={styles.headerContainer}>
            <div className={styles.headerContent}> 
                <img src="/images/logo.svg" alt="Logo" />
                <nav>
                    <ActiveLink activateClassname={styles.active} href="/" prefetch>
                        <a >Home</a>
                    </ActiveLink>
                    <ActiveLink activateClassname={styles.active} href="/posts" prefetch>
                        <a>Posts</a>
                    </ActiveLink>
                    
                </nav>

                
                <SigninButton></SigninButton>
            </div>
        </header>
    )

}