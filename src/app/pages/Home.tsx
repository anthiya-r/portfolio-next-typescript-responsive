"use client";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      {/* <Skills /> */}
      <Footer />
    </>
  );
}
