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
            console.log("oi")
                
              const response = await axios.post('http://localhost:3335/auth',req.body).then((message)=>{return message}).catch((message)=> message)
              console.log(response);
              const user = {
                response: response.response.status,
                data: response.response.data,
              }

              console.log(user.data)
              
              
                
              if (response) {
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
            const status = user?.response
            if(status === 400){
              console.log("Juan")

              console.log(token)
            }

            
            user && (token.user = user.data);
            
            
            return token
        },
    
            async session(session, token){
             console.log(session)
               
              session = token


              
              return session

              
              

            },
            async signIn(user) {
              
              if (user.status === 400){
                
                
                return false

              }
              else{
                return true
              }
            }
            

                
        }
})