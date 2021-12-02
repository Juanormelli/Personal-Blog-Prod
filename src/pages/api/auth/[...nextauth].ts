import Provider from "next-auth/providers"
import axios from "axios"; 
import NextAuth from "next-auth";
import { session } from "next-auth/client";




export default  NextAuth({
    
    providers: [
        Provider.Credentials({
         
          name: 'credentials',
          credentials: {
            username: { label: "Username", type: "text" },
            password: {  label: "Password", type: "password" }
          },
          
          async authorize (credentials, req) {
                
                

              const response = await axios.post('http://localhost:3335/auth',req.body)

              const user = response.data

              //console.log(user)
                
              if (response.status === 200) {
                
                
                return user
              } 
              else {
                return null
              }
            }
          }),
        ],
        callbacks:{ 

           async jwt ( token, user) {
            user && (token.user = user);
            console.log("Aqui")
            console.log(token)
            return token
        },
    
            async session(session, token){
             
               
              session= token

              console.log("Aqui")
              console.log(session)
              return session

              
              

            }
            

                
        }
})