"use client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

const Dashboard = () => {
  const userName = JSON.parse(localStorage.getItem("userInfo")!).userName;
  return (
    <div className="flex justify-center mt-10">
      <h1>{`welcome to your dashboard`}
        <span className="text-red-400 ml-1">{userName}</span>
      </h1>
    </div>
  );
};
export default Dashboard;
