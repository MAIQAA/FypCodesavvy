"use client";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const handleWorkspace = () => {
    router.push("/workspace");
  };

  const handleLearn = () => {
    router.push("/learning");
  };

  const handleLogout = () => {
    signOut();
  };

  // Redirect user to /HomePage if authenticated
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <>
    <div className="absolute bg-transparent w-full top-0 self-start z-40 text-lg">
      <div className=" m-3 w-auto px-10 flex items-center justify-between">
        <ul className="flex gap-7 items-center w-1/2">
          <li className="mr-40" onClick={handleHome}>
            <Image
              src={"/Logo.png"}
              width={50}
              height={100}
              alt="Codesavvy Logo"
            />
          </li>
          <li onClick={handleLearn}>Learning</li>
          <li>Exercises</li>
          <li onClick={handleWorkspace}>Workspace</li>
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
    </div>
                </>
  );
};
export default Navbar;
