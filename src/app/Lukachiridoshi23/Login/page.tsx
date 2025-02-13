"use client"
import { useState, useEffect, FormEvent } from "react"
import { z } from "zod"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { AuthError } from "next-auth";
import { signIn } from "next-auth/react";


const schemaLogin = z.object({
    username: z.string().min(3, "username minimal 3 karakter"),
    email: z.string().min(3, "email minimal 3 karakter"),
    password: z.string().min(3, "password minimal 3 karakter"),
})

const Login = () => {

    const [username, setusername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [Loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string | null>("")

    const [ErrorUsername, setErrorUsername] = useState<string | null>(null)
    const [ErrorEmail, setErrorEmail] = useState<string | null>(null)
    const [ErrorPassword, setErrorPassword] = useState<string | null>(null)

    const router = useRouter()

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault()


        setErrorUsername(null)
        setErrorEmail(null)
        setErrorPassword(null)

        if (!username || !email || !password) {
            return
        }

        const validasiLogin = schemaLogin.safeParse({
            username,
            email,
            password
        })

        if (!validasiLogin.success) {
            validasiLogin.error.errors.forEach((err) => {
                if(err.path[0] === "username"){setErrorUsername(err.message)}
                if(err.path[0] === "email"){setErrorEmail(err.message)}
                if(err.path[0] === "password"){setErrorPassword(err.message)}
            })
            setLoading(false)
            return
        }

        setErrorUsername(null)
        setErrorEmail(null)
        setErrorPassword(null)

        const formData = new FormData()

        formData.append("username", username)
        formData.append("email", email)
        formData.append("password", password)

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_POSTLOGIN}`, {
            method: "POST", 
            body: formData
        })

        // if (response.status == 402) {
        //     setMessage("Mohon Maaf Email Anda Belum Terdaftar, Silahkan Register")
        //     router.refresh() 
        // } else if (response.status == 200) {
        //     setMessage("Login Berhasil")
        //     router.push("/halamanadmin")
        //     return
        // } else if (response.status == 500) {
        //     setMessage("Login Gagal")
        //     return
        // } else {
        //     return
        // }

        
        if (!response) {
            console.log("gagal Login");
        }
        try {
            const resu = await signIn("credentials", { email, password, redirect: true, redirectTo: "/Lukachiridoshi23/Admin" })

            if (resu?.error) {
                setMessage(resu.error)
                return
            }
        } catch (error) {
            if (error instanceof AuthError) {
                switch (error.type) {
                    case "CredentialsSignin":
                        return { messsage: "invalid Credentials" }

                    default:
                        return { message: "something went wrong" }
                }
            }
            throw error
        }
        

    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border-2 p-4 w-[25rem] h-auto">
                <div className="flex justify-center items-center h-auto">
                    <label className="font-title font-semibold text-[1.3rem]">Login</label>
                </div>
                {message && <p className="text-[red]">{message}</p>}
                <form onSubmit={handleLogin} id="form-login" method="post" className="flex flex-col gap-2">
                    <label htmlFor="username" className="font-title font-semibold text-[1rem]">Username</label>

                    <input type="text" name="username" id="username" placeholder="Username"
                        className="font-title font-semibold outline-none border-b-2 w-auto focus:transition-all focus:border-b-2 focus:border-sky-500 p-1"
                        minLength={1}
                        maxLength={50}
                    onChange={(e) => {setusername(e.target.value)}}
                    required/>
                    
                    {ErrorUsername && <p className="text-[red]">{ErrorUsername}</p>}

                    <label className="font-title font-semibold text-[1rem]">Gmail</label>

                    <input type="text" name="Gmail" id="Gmail" placeholder="Gmail"
                        className="font-title font-semibold outline-none border-b-2 w-auto focus:transition-all focus:border-b-2 focus:border-sky-500 p-1"
                        minLength={1}
                        maxLength={50}
                        onChange={(e) => { setEmail(e.target.value) }}
                        required/>
                    
                    {ErrorEmail && <p className="text-[red]">{ErrorEmail}</p>}

                    <label className="font-title font-semibold text-[1rem]">Password</label>

                    <input type="password" name="Password" id="Password" placeholder="Password"
                        className="font-title font-semibold outline-none border-b-2 w-auto focus:transition-all focus:border-b-2 focus:border-sky-500 p-1"
                        minLength={1}
                        maxLength={50}
                        onChange={(e) => { setPassword(e.target.value) }}
                        required/>
                    
                    {ErrorPassword && <p className="text-[red]">{ErrorPassword}</p>}

                    <div className="">
                        <p>Don't have an account yet ? <Link className="text-[blue]" href={"/Lukachiridoshi23/Register"}>Sign In There</Link></p>
                    </div>

                    <center>
                        <button type="submit" className="border-2 border-black px-4 py-1 font-title font-semibold w-[20rem] hover:transition-all hover:bg-sky-500 hover:text-white">Login</button>
                    </center>
                </form>
                <div className="flex justify-center items-center h-auto gap-4 p-2">
                    <center>
                        <button type="submit" className="border-2 border-black px-4 py-1 font-title font-semibold w-[10rem] hover:transition-all hover:bg-gray-500 hover:text-white">Google</button>
                    </center>
                    <center>
                        <button type="submit" className="border-2 border-black px-4 py-1 font-title font-semibold w-[10rem] hover:transition-all hover:border-gray-500 hover:bg-black hover:text-white">Github</button>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Login