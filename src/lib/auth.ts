import NextAuth, { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialProvider from "next-auth/providers/credentials";

import { prisma } from "./db";
import API from "./API";

const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV === "development",
  secret: process.env.SECRET_KEY,
  session: { strategy: "jwt" },
  callbacks: {
    jwt: async ({ token }) => {
      token.name = token.email?.split("@")[0];
      return token;
    },
  },
  pages: {
    signIn: "/sign-in",
    //newUser: '/auth/new-user' // When created a new user
  },
  jwt: { maxAge: 60 * 60 * 24 * 30 },
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        let user = null;
        console.log("authorize", credentials);
        return {};
      },
    }),
  ],
};

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth(authConfig);
