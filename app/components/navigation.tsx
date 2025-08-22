"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Navigation() {
  const pathName = usePathname();
  return (
    <div className="flex gap-3 justify-center items-center p-4">
      <Link
        href="/"
        className={pathName === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}
      >
        Home
      </Link>
      <Link
        href="/aboutus"
        className={
          pathName === "/aboutus" ? "font-bold mr-4" : "text-blue-500 mr-4"
        }
      >
        About Us
      </Link>
      <Link
        href="/products/1"
        className={
          pathName.startsWith("/products/1")
            ? "font-bold mr-4"
            : "text-blue-500 mr-4"
        }
      >
        Product
      </Link>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
      
    </div>
  );
}
