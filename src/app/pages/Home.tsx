"use client";
import Navbar from "../components/Navbar";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <h1>
        {" "}
        <button>Hello Wolrd!</button>
      </h1>
    </>
  );
}
