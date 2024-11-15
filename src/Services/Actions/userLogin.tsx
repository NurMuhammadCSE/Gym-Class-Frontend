"use server";

import { FieldValues } from "react-hook-form";

export const userLogin = async (data:FieldValues) => {
    console.log(data)
    // console.log(process.env.NEXT_PUBLIC_BACKEND_API_URL)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );
//   console.log(res)
  const userInfo = await res.json();
  console.log(userInfo)
  return userInfo;
};
