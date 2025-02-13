"use client"
import style from "./register.module.css"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { POST } from "@/app/api/handleDataAdmin/POST/route"
import { z } from "zod"
import { useFormState } from "react-dom"

const schemaRegister = z.object({
    username: z.string().min(3, { message: "Karakter minimal 3 karakter" }),
    email: z.string().email().min(3, { message: "email anda kurang 3 karakter" }),
    password: z.string().min(6, { message: 'password anda kurang 6 karakter' }),
    image: z.instanceof(File).optional()
})

const Register: React.FC = () => {

    const router = useRouter()

    // const [data, setdata] = useFormState(POST, null)


    const [image, setImage] = useState<File | null>(null)
    const [username, setusername] = useState<string>('')
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    const [Loading, setLoading] = useState<boolean>(false)
    const [resu, setResu] = useState<[]>([])
    const [error, seterror] = useState<string | null>("")

    const [message, setMessage] = useState<string |null>("")
    
    const [errorImage, setErrorImage] = useState<string | null>(null)
    const [errorUsername, setErrorUsername] = useState<string | null>(null)
    const [errorEmail, setErrorEmail] = useState<string | null>(null)
    const [errorPassword, setErrorPassword] = useState<string | null>(null)


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()


        try {
            setLoading(true)

            if (!image) {
                console.log('image tidak ada');
                setLoading(false)
                return
            } else if (!username) {
                console.log('username tidak ada');
                setLoading(false)
                return
            } else if (!email) {
                console.log('email tidak ada');
                setLoading(false)
                return
            } else if (!password) {
                console.log('password tidak ada');
                setLoading(false)
                return
            }

            setErrorImage(null)
            setErrorUsername(null)
            setErrorEmail(null)
            setErrorPassword(null)

            const validasiReg = schemaRegister.safeParse({
                username,
                email,
                password,
                image
            })

            if (!validasiReg.success) {
                validasiReg.error.errors.forEach((err) => {
                    if (err.path[0] === "image") { setErrorImage(err.message) }
                    if (err.path[0] === "username") { setErrorUsername(err.message) }
                    if (err.path[0] === "email") { setErrorEmail(err.message) }
                    if (err.path[0] === "password") { setErrorPassword(err.message) }
                })
                setLoading(false)
                return
            }

            setErrorImage(null)
            setErrorUsername(null)
            setErrorEmail(null)
            setErrorPassword(null)

            const Form = await new FormData()
            if (image) {
                Form.append('image', image)
            }
            Form.append('username', username)
            Form.append('email', email)
            Form.append('password', password)

            // const isiData = Object.fromEntries(Form.entries())

            setLoading(false)


            const respone = await fetch(`${process.env.NEXT_PUBLIC_API_POSTADMIN}`, {
                method: 'POST',
                body: Form
            })

            if (respone.status === 402) {
                setMessage("Akun Sudah Terdaftar, silahkan Regis Akun Lain")
                router.refresh()
            } else if (respone.status === 202) {
                router.push("/Lukachiridoshi23/Login")
            } else {
                return
            }


        } catch (err) {
            alert("terjadi kesalahan")
        } finally {
            setLoading(false)
        }
    }




    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col shadow-2xl w-[25rem] h-auto font-semibold p-4 gap-4">
                <h1 className="flex justify-center items-center font-title font-semibold text-[1.5rem]">Register</h1>
                {message && <p className="text-[red]">{message}</p> }
                <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">


                    <label 
                        className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-md">Image</label>
                <br />
                    <input type="file" name="imagepo" id="file-upload" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} className="hidden" />
                    <br />

                    {errorImage && <p className="text-[red]">{errorImage}</p>}

                    <label  className="font-title font-semibold">name</label>
                    <br />


                    <input
                        type="text" name="usernamem" id="username" onChange={(e) => setusername((e.target.value))} className="border-b-2 focus:border-sky-500 outline-none p-[0.3rem] text-[black] font-title font-semibold" required />
                    <br />

                    {errorUsername && <p className="text-[red]">{errorUsername}</p>}
                
                    <label className="font-title font-semibold">email</label>
                    <br />

                    <input type="text" name="emaill" onChange={(e) => setemail((e.target.value))} className="font-title font-semibold border-b-2 focus:border-sky-500 outline-none p-[0.3rem] text-[black]" required />
                    <br />

                    {errorEmail && <p className="text-[red]">{errorEmail}</p>}
                
                    <label className="font-title font-semibold">password</label>
                    <br />

                    <input type="password" name="passwordd" onChange={(e) => setpassword((e.target.value))} className="font-title font-semibold border-b-2 focus:border-sky-500 outline-none p-[0.3rem] text-[black]" required />
                    <br />

                    {errorPassword && <p className="text-[red]">{errorPassword}</p>}
                    
                    <center>
                        <button type="submit" id="btn_submit" disabled={Loading} className="border-2 border-solid border-[black] bg-white hover:transition-all hover:bg-sky-500 hover:text-white my-3 w-[20rem] h-[2rem] font-title font-semibold" >{Loading ? 'sabar ki' : 'Register'}</button>
                    </center>
                </form>
                    <div className="flex items-center justify-center gap-4">
                        <center>
                        <button type="submit" id="btn_submit" disabled={Loading} className="border-2 border-solid border-[black] bg-white hover:transition-all hover:bg-gray-600 hover:text-white my-1 w-[10rem] h-[2rem] font-title font-semibold" >{Loading ? 'sabar ki' : 'Goggle'}</button>
                        </center>
                        <center>
                        <button type="submit" id="btn_submit" disabled={Loading} className="border-2 border-solid border-[black] bg-white hover:transition-all hover:border-gray-700 hover:bg-black hover:text-white my-1 w-[10rem] h-[2rem] font-title font-semibold" >{Loading ? 'sabar ki' : 'Github'}</button>
                        </center>
                    </div>
            </div>
        </div>
    )
}

export default Register