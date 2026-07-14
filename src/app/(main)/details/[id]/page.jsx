// 'use client'
import DetailsCom from "@/components/DetailsCom";
import { authClient } from "@/lib/auth-client";
// import { authClient } from '@/lib/auth-client';
import { getBooks } from "@/lib/data";
// import Image from 'next/image';
import React from "react";

export default async function Details({ params }) {
  // const {data: session} = authClient.useSession()
  // console.log(session);

  const book = await getBooks();
  const { id } = await params;
  const detail = book.find((b) => b.id == id);
  console.log(detail);

  return <DetailsCom detail={detail}></DetailsCom>;
}
