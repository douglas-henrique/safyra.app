
import type { AuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/database";
import type { Adapter } from 'next-auth/adapters';

export const options: AuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    })
  ],
  pages: {
    signIn: "/",
    signOut: "/"
  },
  // callbacks: {
  //   async jwt(props) {
  //     const { user, token } = props
  //     if (user) {
  //       token.id = user.id
  //     }
  //     return token;
  //   },
  //   async session(props) {
  //     const { session, token} = props

  //     session.user.id = token.id as string;
  //     session.user.accessToken = token.accessToken as string; // Add access token to session
  //     return session
  //   },
  // },
};