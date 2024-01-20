import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/about";
import Projects from "./components/projects/Projects";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen flex justify-center">
      <div className="max-w-[1400px] w-full flex justify-center flex-col mb-4">
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
