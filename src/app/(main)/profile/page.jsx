"use client";
import UpdateInfo from "@/components/UpdateInfo";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Profile() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className=" min-h-screen flex justify-center items-center "
    >
      <div className="border h-fit mx-auto text-center p-20 space-y-10 max-w-[500px] w-full profile rounded-2xl">
        <div>
          {user?.image && user.image.trim() !== "" ? (
            <Image
              src={user.image}
              width={100}
              height={100}
              alt={user.name}
              className="rounded-full object-cover mx-auto"
            />
          ) : (
            <FaRegUser className="mx-auto mt-10" />
          )}

          {user && <h1 className="text-3xl">{user.name}</h1>}
          {user && <p>{user.email}</p>}
        </div>
        <div>
          {/* <button>Edit</button> */}
          <UpdateInfo></UpdateInfo>
        </div>
      </div>
    </motion.div>
  );
}
