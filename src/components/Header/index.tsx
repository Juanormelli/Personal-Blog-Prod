


import styles from "./styles.module.scss";

import { useRouter } from "next/router";
import { ActiveLink } from "../ActiveLink";
import { useState } from "react";


interface HeaderProps{ 
    onOpenLoginModal: () => void;
}

export default function Header(props: HeaderProps){
    




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
                <button onClick={props.onOpenLoginModal}>Login</button>
                
                
            </div>
        </header>
    )

}