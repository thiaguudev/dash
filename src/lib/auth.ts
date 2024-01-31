import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { prisma } from "./db";
import API from "./API";
import { compare } from "bcrypt";

const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV === "development",
  secret: process.env.SECRET_KEY,
  session: { strategy: "jwt", maxAge: 30 * 60 * 24 * 60 },
  pages: {
    signIn: "/sign-in",
    newUser: "/auth/new-user", // When created a new user
  },
  jwt: { maxAge: 60 * 60 * 24 * 30 },
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email as string },
          });
          console.log("[AUTHORIZE]", user);
          if (user) {
            const isValid = await compare(
              credentials.password as string,
              user.hashPassword
            );
            return isValid ? user : null;
          }
          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token }) => {
      token.name = token.email?.split("@")[0];
      console.log("[JWT]");
      return token;
    },
    authorized: async ({ auth, request }) => {
      console.log("[AUTHORIZED]");
      return true;
    },
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);
