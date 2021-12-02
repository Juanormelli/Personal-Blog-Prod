import { GetStaticProps } from "next"
import Head from "next/head"
import styles from "./styles.module.scss"
import { getPrismicClient } from './../../services/prismic';
import Prismic from "@prismicio/client"
import { RichText} from "prismic-dom";
import Link from "next/link"

type Posts={
    slug :string;
    title: string;
    excerpt:string;
    updateAt:string;
    id:string;
}

interface PostsProps{
    posts:Posts[]
}

export default function Posts({posts}:PostsProps){
   
    return (
        <>
            <Head>
                <title>Posts | TECH POSTS</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    {posts.map(post => (
                        <Link href={`/posts/${post.slug}`} key={post.id}>
                            <a >
                                <time>{post.updateAt}</time>
                                <strong>{post.title}</strong>
                                <p>{post.excerpt}</p>
                            </a>
                        </Link>
                    ))}
                </div>
            </main>

        </>

    )



}



export const getStaticProps: GetStaticProps= async ()=>{
    const prismic= getPrismicClient();


    const response = await prismic.query([
            Prismic.predicates.at('document.type','posts')
        ],
        {
        
            fetch:['post.title', 'post.content'],
            pageSize: 100
        }
    )

    
    
    const posts = response.results.map(post=>{
        return {
            slug :post.uid,
            title: RichText.asText(post.data.title),
            id : post.uid,
            excerpt: post.data.content.find((content: { type: string; })=>content.type==="paragraph")?.text??"",
            updateAt: new Date(post.last_publication_date?post.last_publication_date:"").toLocaleDateString('pt-BR',{
                day:'2-digit',
                month:"long",
                year:'numeric'
            })

        }
    })

   

    return {
        props:{ posts}
    }



}