import './App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
