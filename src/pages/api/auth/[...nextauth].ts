import Provider from "next-auth/providers"
import axios from "axios"; 
import NextAuth from "next-auth";





export default  NextAuth({
    
    providers: [
        Provider.Credentials({
         
          name: 'credentials',
          credentials: {
            username: { label: "Username", type: "text" },
            password: {  label: "Password", type: "password" }
          },
          
          async authorize (credentials, req) {
            
                
              const response = await axios.post('http://localhost:3335/auth',req.body).then((message)=>{return message}).catch((message)=> {return message})
              console.log("Aqui")
              
              const status =  response.status
              console.log(status)
              
              if (status !== 200) {
                const user = {
                  response: response.response.status,
                  data: response.response.data.message,
                }
                return user


              } else{
                console.log("Juan")
                const user = {
                  response: response.status,
                  data: response.data,
                }
  
                return user
  
                

              }
              
              
              
                
              
              
              
            }
          }),
        ],
        callbacks:{ 

           async jwt ( token, user) {
           
            user && (token.user = user.data);
            
            
            return token

           

            
            
        },
    
            async session(session, token){
             
               
              session = token


              console.log(session)
              return session

              
              

            },
            async signIn(user) {
              const error = user.data
              if (user.response != 200){
                
                
                throw new Error(String(error)) 

              }
              else{
                return true
              }
            }
            

                
        }
})