import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// console.log("client id: ",process.env.GOOGLE_CLIENT_ID)
// console.log("client secret: ",process.env.GOOGLE_CLIENT_SECRET)
// console.log("db url:",process.env.DATABASE_URL)

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
    ]
})

export {handler as GET, handler as POST}; 