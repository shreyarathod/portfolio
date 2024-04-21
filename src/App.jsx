import { useState } from "react";
import Navbar from "./assets/components/nav/Navbar";
import Home from "./assets/components/home/Home";
import About from "./assets/components/about_and_skills/About";
import Projects from "./assets/components/projects/Projects";
import Education from "./assets/components/education/Education";
import Contact from "./assets/components/contact/Contact";
import Footer from "./assets/components/footer/Footer";
import "./App.css";
import GitHubProfile from "./assets/components/git/GitHubProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <GitHubProfile></GitHubProfile>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
