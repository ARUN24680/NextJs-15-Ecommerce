import { UserIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-6 w-full">
        <Link href={"/signIn"}>
          <UserIcon className="w-8 h-8 " />
          <span className="font-bold"> Sign In</span>
        </Link>
        <Link href={"/signIn"}>
          <UserIcon className="w-8 h-8 " />
          <span className="font-bold"> Cart</span>
        </Link>
        {/* <UserButton/>
                <CartButton/> */}
      </nav>
    </div>
  );
}
