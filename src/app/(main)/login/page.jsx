'use client'
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { toast } from 'react-toastify'

export default function Login() {


    const loginButton = async (e) => {
        e.preventDefault()
        // const name = e.target.name.value
        // const image = e.target.image.value
        const password = e.target.password.value
        const email = e.target.email.value
        // console.log(name, image, password, email);

        const { data, error } = await authClient.signIn.email({
            // name: name, // required
            email: email, // required
            password: password, // required
            // image: image,
            rememberMe: true,
            callbackURL: "/home",
        });
        // console.log(data, error)
        if (error) {
            toast.error(error.message)
        }
        else {
            toast.success("Login Successfull")
        }
    }


    const googleButton = async () => {
        await authClient.signIn.social({
            provider: "google",
            rememberMe:false,
        })
        toast.success("Login Success")
    }
    return (
        <div className='flex justify-center items-center min-h-screen px-4'>
            <form action="" onSubmit={loginButton} className='max-w-xl w-full mx-auto'>
                <fieldset className="fieldset bg-[#1C1B1F] border-[#b88e4866] shadoww rounded-box border md:p-10 p-6  ">
                    <h1 className='text-center text-3xl'>Please Login</h1>

                    <label className="label ">Email</label>
                    <input type="email" className="input w-full bg-[#1C1B1F] border-[#b88e4866]" placeholder="Email" name='email' />

                    <label className="label">Password</label>
                    <input type="password" className="input w-full bg-[#1C1B1F] border-[#b88e4866]" placeholder="Password" name='password' />

                    <button className="btn btn-neutral mt-4 button" type='submit'>Login</button>
                    <p className='text-sm mt-3'>Don't have any account? <span className='text-[#b59e1c]'><Link href='/register'>Register</Link></span></p>

                    <div className="divider">OR</div>
                    <button type='button' onClick={googleButton} className='btn btn-neutral w-full border flex items-center button'><FaGoogle />
                        Log in with Google</button>
                </fieldset>

            </form>

        </div>
    )
}
// <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 md:p-10 shadow-xl">