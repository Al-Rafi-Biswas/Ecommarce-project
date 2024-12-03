import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Head from "./Components/Head";
import Nav from "./Components/Nav";
import HeroSection from "./Components/Hero1";
import Footer from "./Components/Footer";
import LatestBlog from "./Components/LatestBlog";
import Hero9 from "./Components/Hero9";
import Hero2 from "./Components/Hero2";
import Hero4 from "./Components/Hero4";
import Hero5 from "./Components/Hero5";
import Hero6 from "./Components/Hero6";
import Hero6_2 from "./Components/Hero6_2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head />
      <Nav />
      <HeroSection />
      <Hero2 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      <Hero6_2 />
      <Hero9 />
      <LatestBlog />
      <Footer />
    </>
  );
}

export default App;
