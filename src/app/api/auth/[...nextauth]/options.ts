import type {NextAuthOptions} from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: "text",
                    placeholder: "your username",
                },
                password: {
                    label: 'Password',
                    type: "password",
                    placeholder: "your password",
                }
            },
            async authorize(credentials) {
                // This is where we gotta check for the frenchie database
                const user= {id: '22', name: "Mick", password: 'iambaguette'}

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                }
                else return null
            }
        })
    ],
}