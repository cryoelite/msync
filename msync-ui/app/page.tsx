import { login } from "@/src/config/route";
import { isUserAuthValid } from "@/src/cookies/auth";
import { redirect } from "next/navigation";



export default async function Home() {
  const auth_result= await isUserAuthValid();

  if(!auth_result) {
    redirect(login);
  }

  return <div>Hello, World!</div>;
}
