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
                console.log("Aqui 1")
                console.log(req.body)

              const response = await axios.post('http://localhost:3335/auth',req.body)

                
                
              if (response) {
                console.log("Aqui 000")
                return response.data
              } else {
                console.log("Aqui 2")

                return null
              }
            }
          })
        ]

  

})