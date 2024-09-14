import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { login } from "./lib/getData";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                if (credentials == null) return null;

                try {
                    const response = await login(credentials);
                    console.log(response);      
                    if (response.token) {
                        return {
                            accessToken: response.token,
                            accessTokenExpires: response.expires_in
                        };
                    } else {
                        return response;
                        // throw new Error(response);
                    }
                }
                catch (e) {
                    throw new Error(e.message);
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user, account }) {
            
            if (account && user) {
                var decodedToken = JSON.parse(Buffer.from(user?.accessToken.split('.')[1], 'base64').toString());
                
                token.accessToken = user?.accessToken;
                token.accessTokenDEcode = decodedToken.exp;
                token.accessTokenExpires = user?.accessTokenExpires;
            }

            return token;
            
        },
        async session({ session, token }) {
            
            if(token.accessToken){
                session.accessToken = token?.accessToken;
                session.accessTokenDEcode = token?.accessTokenDEcode;
                session.accessTokenExpires = token?.accessTokenExpires;
            }

            return session;
        },
    }
});