import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import bcrypt from 'bcryptjs';

export const options = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Credentials({
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });

        // if (!user) {
        //   return null;
        // }
        // if (email === user.email && password === user?.password) {
        //   return user;
        // } else {
        //   return null;
        // }

        const hashedPassword = user.password;

        // Compare the plain-text password with the hashed password
        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        
        if (passwordMatch) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    home:"/",
    signUp:"/signup",
  },
};