"use client"
import CodeSavvyMarquee from "@/Components/CodeSavvyMarquee";
import Color from "@/Components/Color";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import LandingPage from "@/Components/LandingPage";
import Lectures from "@/Components/Lectures";
import LoadingScreen from "@/Components/LoadingScreen";
import Navbar from "@/Components/Navbar";
import Workspace from "@/Components/Workspace";
import React, { useEffect, useState } from "react";

export default function Page() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <main className="">
          <LandingPage />
          <CodeSavvyMarquee />
          <Features />
          <Workspace />
          <Color />
          <Lectures />
        </main>
      )}
    </>
  );
}
