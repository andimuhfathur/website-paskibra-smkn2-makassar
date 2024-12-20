"use client"
import style from "./register.module.css"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import img1 from "../../../../public/about/post435299753_1182138313156164_626501692663617500_n.jpg"

const Login = () => {

    

    // const [data, setdata] = useFormState(POST, null)


    const [image, setImage] = useState<File | null>(null)
    const [username, setusername] = useState<string>('')
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    const [Loading, setLoading] = useState<boolean>(false)

   
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

       

        setLoading(false)

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
        

        const Form = await new FormData()
        if (image) {
            Form.append('image', image)
        }
        Form.append('username', username)
        Form.append('email', email)
        Form.append('password', password)

        // const isiData = Object.fromEntries(Form.entries())

        setLoading(false)
        

        const respone = await fetch('/api/handleDataAdmin/POST', {
            method: 'POST',
            body: Form
        })

        if (!respone) {
            console.log('gagal');
        } else {
            console.log('berhasil');
            return
        }


    }





    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col border-2 w-[30rem] h-auto font-semibold p-4">\
                <h1 className="flex justify-center items-center">Register</h1>
                <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">


                    <label htmlFor="image">Image</label>
                    <br />
                    <input type="file" name="image" id="image" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} className="border-2 border-black p-[0.5rem] rounded-xl text-[black]" />
                    <br />
                    {/* <p>{data?.error.image}</p> */}
                    <br />
                    <label htmlFor="username" className="">name</label>
                    <br />

                    <input
                        type="text" name="username" onChange={(e) => setusername((e.target.value))}  className="border-2 border-black p-[0.5rem] rounded-xl text-[black]" required />
                    <br />
                    {/* <p>{data?.error.name}</p> */}
                    <br />
                    <label htmlFor="email" className="">email</label>
                    <br />
                    <input type="text" name="email" onChange={(e) => setemail((e.target.value))}  className="border-2 border-black p-[0.5rem] rounded-xl text-[black]" required />
                    <br />
                    {/* <p>{data?.error.email}</p> */}
                    <br />
                    <label htmlFor="password" className="">password</label>
                    <br />
                    <input type="password" name="password" onChange={(e) => setpassword((e.target.value))}  className="border-2 border-black p-[0.5rem] rounded-xl text-[black]" required />
                    <br />
                    {/* <p>{data?.error.password}</p> */}
                    <br />
                    <button type="submit" id="btn_submit" disabled={Loading} className="border-2 border-solid border-[white] mt-[2rem] w-[5rem] h-[2rem]">{Loading ? 'sabar ki' : 'Register'}</button>
                </form>
            </div>
        </div>
    )
}

export default Login