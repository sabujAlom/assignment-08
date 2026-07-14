"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Register() {
  const router = useRouter();

  const registerButton = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const password = e.target.password.value;
    const email = e.target.email.value;

    const { data, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: image,
      callbackURL: "/login",
    });
    // console.log(data, error)
    if (error) {
      toast.error(error.message);
    } else {
      await authClient.signOut();
      toast.success("Registered Successfully");
      router.push("/login");
    }
  };

  const googleButton = async () => {
    await authClient.signIn.social({
      provider: "google",
      rememberMe: false,
    });
    toast.success("Registration Successfull");
    router.push("/login");
    await authClient.signOut;
  };

  return (
    <div className="flex justify-center items-center mt-10 min-h-screen px-4">
      <form
        action=""
        onSubmit={registerButton}
        className="max-w-xl w-full mx-auto"
      >
        <fieldset className="fieldset bg-[#1C1B1F] shadoww border-[#b88e4866] rounded-box border md:p-10 p-6  ">
          <h1 className="text-center text-3xl">Please Register</h1>

          <label className="label">Name</label>
          <input
            type="text"
            className="input w-full bg-[#1C1B1F] border-[#b88e4866]"
            placeholder="Name"
            name="name"
            required
          />

          <label className="label">Image URL</label>
          <input
            type="url"
            className="input w-full bg-[#1C1B1F] border-[#b88e4866]"
            placeholder="Image URL"
            name="image"
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full bg-[#1C1B1F] border-[#b88e4866]"
            placeholder="Email"
            name="email"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full bg-[#1C1B1F] border-[#b88e4866]"
            placeholder="Password"
            name="password"
            required
          />

          <button type="submit" className="btn btn-neutral button mt-4 w-full">
            Register
          </button>
          <p className="text-sm mt-4required text-white">
            Already have an account?{" "}
            <Link className="text-blue-500" href="/login">
              {" "}
              Login
            </Link>
          </p>

          <div className="divider">OR</div>
          <button
            type="button"
            onClick={googleButton}
            className="btn btn-neutral w-full border flex items-center button"
          >
            <FaGoogle />
            Register with Google
          </button>
        </fieldset>
      </form>
    </div>
  );
}
