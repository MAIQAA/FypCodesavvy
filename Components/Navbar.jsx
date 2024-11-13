"use client";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    signOut();
  };

  // Redirect user to /HomePage if authenticated
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/codesavvy");
    }
  }, [status, router]);

  return (
    <div className="absolute w-full top-0 flex self-start items-center justify-between px-16 z-50 text-lg">
      <ul className="flex gap-7 items-center w-1/2">
        <li className="mr-40">
          <Image
            src={"/Logo.png"}
            width={50}
            height={100}
            alt="Codesavvy Logo"
          />
        </li>
        <li>Tutorials</li>
        <li>Exercise</li>
        <li>Workspace</li>
        <li>Resources</li>
      </ul>

      <div>
        <div>
          {status !== "authenticated" ? (
            <div className="text-white">
              <button onClick={handleLogin}>Login / Sign Up</button>
            </div>
          ) : (
            <div className="flex gap-4 text-white">
              <h2>Welcome, {session.user.name}</h2>
              <hr />
              <button onClick={handleLogout}>Sign out</button>
            </div> // If authenticated, don't render any UI here because of the redirect
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
