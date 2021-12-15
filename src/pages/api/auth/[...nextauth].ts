import Provider from "next-auth/providers";
import axios from "axios";
import NextAuth from "next-auth";

export default NextAuth({
  providers: [
    Provider.Credentials({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const response = await axios
          .post("http://18.231.81.185:80/auth", req.body)
          .then((message) => {
            return message;
          })
          .catch((message) => {
            return message;
          });
        

        const status = response.status;
        

        if (status !== 200) {
          const user = {
            response: response.response.status,
            data: response.response.data.message,
          };
          return user;
        } else {
         
          const user = {
            response: response.status,
            data: response.data,
          };

          return user;
        }
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      user && (token.user = user.data);

      return token;
    },

    async session(session, token) {
      session = token;

      return session;
    },
    async signIn(user) {
      const error = user.data;
      if (user.response != 200) {
        throw new Error(String(error));
      } else {
        return true;
      }
    },
  },
});
