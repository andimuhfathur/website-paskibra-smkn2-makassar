import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "./src/app/api/prisma/prisma";
import Credentials from "next-auth/providers/credentials"
import { schemaCrendential } from "@/app/Kebu/zod";
import { compareSync } from "bcrypt";


export const { signIn, signOut, handlers, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    pages: {
        signIn: "/Lukachiridoshi23/Login"
    },
    providers: [
        Credentials({
            credentials: {
                username: {
                    label: "username",
                    type: "string"
                },
                email: {
                    label: "email",
                    type: "string",
                    example: "bali.sum@gmail.com"
                },
                password: {
                    label: "password",
                    type: "string"
                }
            },
            authorize: async (credentials) => {
                const validasiDat = await schemaCrendential.safeParse(credentials)

                if (!validasiDat.success) {
                    console.error("validasi Not found")
                    return null
                }

                const datUser = validasiDat.data

                console.log(`${datUser.email}, ${datUser.password}`);


                const cekUser = await prisma.user.findUnique({
                    where: {
                        email: datUser?.email
                    }
                })

                if (!cekUser || !cekUser.email || !cekUser.password) {
                    console.error("cekUser Not found")
                    throw new Error("User Not Found")
                }

                console.log(cekUser);


                const compe = compareSync(datUser.password, cekUser.password)
                console.log(`ini compe ${compe}`);

                if (!compe) return null

                return {
                    id: cekUser.id,
                    username: cekUser.username,
                    image: cekUser.image,
                    email: cekUser.email,
                    role: cekUser.role || "user"
                }


            }
        })
    ],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const cekUserLogin = !!auth?.user
            console.log(cekUserLogin);

            const halamanTerlindungi = ['/Lukachiridoshi23/Admin']

            if (!cekUserLogin && halamanTerlindungi.includes(nextUrl.pathname)) {
                return Response.redirect(new URL('/Lukachiridoshi23/Login', nextUrl))
            }
            if (cekUserLogin && nextUrl.pathname.startsWith("/Lukachiridoshi23/Login")) {
                return Response.redirect(new URL('/Lukachiridoshi23/Admin', nextUrl))
            }
            return true
        },
        jwt({ token, user }) {
            if (user) {
                token.role = user.role
                token.name = user.name
            }
            
            return token
        },
        session({ session, token }) {
            session.user.id = token.sub
            session.user.role = token.role
            session.user.name = token.name
            return session
        }

    }

})

