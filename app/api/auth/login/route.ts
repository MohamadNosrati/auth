import {users } from "../../../../db.json";

export async function POST(request: Request) {
  // const formData=await request.json()
  // const isRegistered = users.filter((item)=>{
  //   return item.userName===formData.userName && item.password===formData.passWord
  // })
  // if(isRegistered.length){
  //   return Response.json({
  //     status:200,
  //     message:"login successfully!",
  //     user:{
  //       userName:isRegistered[0].userName,
  //       id:isRegistered[0].id
  //     }
  //   });
  // }else{
  //   return Response.json({
  //     status:404,
  //     message: "login failed!",
  //   });
  // }
}
