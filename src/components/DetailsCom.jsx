"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function DetailsCom({ detail }) {
  const { data: session } = authClient.useSession();
  const handleBorrow = () => {
    if (session) {
      toast.success(
        <span>
          <span className="text-xl font-bold">{detail.title}</span> borrowed
          successfully
        </span>,
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="hero min-h-screen py-30  px-4 sm:px-6 lg:px-0"
    >
      {/* <DetailsCom></DetailsCom> */}
      <div className="hero-content  flex flex-col lg:flex-row gap-10 container mx-auto max-w-[900px] detail p-20 rounded-2xl ">
        <Image
          width={200}
          height={400}
          alt={detail.title}
          src={detail.image_url}
          className="detail-image max-w-sm rounded-lg shadow-2xl"
        />
        <div className="text-center lg:text-left space-y-3">
          <h1 className="text-5xl font-bold">{detail.title}</h1>
          <p className="py-2 text-xl">{detail.description}</p>
          <p className="text-xl font-bold">Writter name : {detail.author}</p>
          <p className="font-bold"> Category : {detail.category}</p>
          <p className="font-bold">
            Available Quantity : {detail.available_quantity}
          </p>
          <button
            onClick={handleBorrow}
            className="btn button bg-gray-500 my-3"
          >
            Borrow this Book
          </button>
        </div>
      </div>
    </motion.div>
  );
}
