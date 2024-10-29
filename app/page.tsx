"use client";
import { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState<Record<string, string>>({
    userName: "",
    passWord: "",
  });
  const cookie = useCookies();
  const handleSubmit = async (
    e: SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) => {
    e.preventDefault();
    const res = await axios.post(`api/auth/login`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.data.status === 200) {
      cookie.set("token", res.data.user.id, { path: "/" });
      router.push("/dashboard");
    } else {
      alert(false);
    }
  };

  return (
    <section className="flex h-screen justify-center items-center bg-[#FFFBEB]  ">
      <div className="rounded-2xl py-12 px-6 bg-[#1E1B4B]">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="userName">
              userName
            </label>
            <input
              value={data.userName}
              onChange={(e) =>
                setData({
                  ...data,
                  userName: e.target.value,
                })
              }
              type="text"
              id="userName"
              className="rounded-xl min-w-96 min-h-10 outline-none text-black px-2"
            />
          </div>
          <div className="mb-8">
            <label className="block mb-1" htmlFor="passWord">
              passWord
            </label>
            <input
              value={data.passWord}
              onChange={(e) =>
                setData({
                  ...data,
                  passWord: e.target.value,
                })
              }
              type="text"
              id="passWord"
              className="rounded-xl min-w-96 min-h-10 outline-none text-black px-2"
            />
          </div>
          <div>
            <input
              type="submit"
              className="w-full bg-[#22C55E] capitalize py-2 rounded-xl"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
