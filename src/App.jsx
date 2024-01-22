import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/about";
import Projects from "./components/projects/Projects";
import "react-image-gallery/styles/css/image-gallery.css";
import Testimonials from "./components/testimonials/Testimonials";
import Certs from "./components/certifications/Certs";
import { Toaster } from "@/components/ui/toaster";
import Contact from "./components/contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen flex justify-center">
      <div className="max-w-[1400px] w-full flex justify-center flex-col mb-4">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Certs />
        <Contact />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
