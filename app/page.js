import CodeSavvyMarquee from "@/Components/CodeSavvyMarquee";
import Color from "@/Components/Color";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import LandingPage from "@/Components/LandingPage";
import Lectures from "@/Components/Lectures";
import Navbar from "@/Components/Navbar";
import Workspace from "@/Components/Workspace";
import React from "react";

export default function page() {

  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <CodeSavvyMarquee/>
      <Features/>
      {/* <LessonExercise/> */}
      <Workspace/>
      <Color/>
      <Lectures/>
      <Footer/>

    </div>
  );
}
