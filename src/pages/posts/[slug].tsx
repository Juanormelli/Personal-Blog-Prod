import { GetServerSideProps, GetStaticProps } from "next";

import  Head  from "next/head";
import { RichText } from "prismic-dom";
import React from "react";

import { getPrismicClient } from "../../services/prismic";
import styles from "./post.module.scss"

interface PostsProps{
    post:{
        slug :string;
        title: string;
        image:any;
        content:string;
        updateAt:string;

    }
    
}


export default function Posts({post}: PostsProps){
    
    return(
        <>
            <Head>
                <title>{post.title} | TECH POSTS</title>

            </Head>

            <main className={styles.container}>
                <article className={styles.post}>
                <time> {post.updateAt}</time>
                    <h1>{post.title}</h1>
                    <img src={post.image.url} alt="IMAGE" />
                    
                    <div className={styles.postContent}dangerouslySetInnerHTML ={{__html:post.content}}></div>
                </article>
            </main>

        </>

    );

}


export const getServerSideProps:GetServerSideProps = async ({params }) => {
    
    
    const slug  = params?.slug
   


    const prismic = getPrismicClient()


    const response = await prismic.getByUID('posts', String(slug),{})

    
    
    const post = {
        slug,
        title:RichText.asText(response.data.title),
        image: response.data.image,
        content: RichText.asHtml(response.data.content),
        updateAt: new Date(response.last_publication_date?response.last_publication_date:"").toLocaleDateString('pt-BR',{
            day:'2-digit',
            month:"long",
            year:'numeric'
        })
    }
   

    return {
        props:{ post},
        redirect:60*60
    }
    
}
 
