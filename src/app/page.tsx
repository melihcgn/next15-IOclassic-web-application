
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href={"/signIn"}>signIn</Link>
    </div>
  );
}