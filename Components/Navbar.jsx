"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleHome = () => router.push("/");
  const handleLogin = () => router.push("/login");
  const handleWorkspace = () => router.push("/workspace");
  const handleLearn = () => router.push("/learning");
  const handleExercises = () => router.push("/exercises");
  const handleColorPicker = () => router.push("/colorpicker");
  const handleLogout = () => signOut();

  // Redirect user to / if authenticated
  useEffect(() => {
    if (status === "authenticated") {
      // Optionally delay the redirect to let the UI update
      const timer = setTimeout(() => {
        router.push("/");
      }, 1500); // Adjust delay as needed
      return () => clearTimeout(timer); // Clean up the timeout
    }
  }, [status, router]);

  return (
    <div className="absolute bg-transparent w-full top-0 self-start z-40 text-lg">
      <div className="m-3 w-auto px-10 flex items-center justify-between">
        <ul className="flex gap-7 items-center w-2/3 cursor-default">
          <li className="mr-40" onClick={handleHome}>
            <Image
              src={"/Logo.png"}
              width={50}
              height={100}
              alt="Codesavvy Logo"
            />
          </li>
          <li
            className="hover:bg-[#DDF345] hover:text-white px-4 py-1 rounded"
            onClick={handleLearn}
          >
            Learning
          </li>
          <li
            className="hover:bg-[#DDF345] hover:text-white px-4 py-1 rounded"
            onClick={handleExercises}
          >
            Exercises
          </li>
          <li
            className="hover:bg-[#DDF345] hover:text-white px-4 py-1 rounded"
            onClick={handleWorkspace}
          >
            Workspace
          </li>
          <li
            className="hover:bg-[#DDF345] hover:text-white px-4 py-1 rounded"
            onClick={handleColorPicker}
          >
            Color Picker
          </li>
        </ul>

        <div>
          {status !== "authenticated" ? (
            <div className="hover:bg-[#DDF345] hover:text-white px-4 py-1 rounded">
              <button onClick={handleLogin}>Login / Sign Up</button>
            </div>
          ) : (
            <div className="flex gap-4">
              <h2 className="rounded">
                Welcome, {session?.user?.name || "User"}
              </h2>
              <hr />
              <button className="rounded" onClick={handleLogout}>
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
