import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from "./components/Projects";
import Artwork from "./components/Artwork";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Navbar />
    <About />
    <Projects />
    <Artwork />
    <Resume />
    <Contact />
    <Footer />

    </>
    
  );
}

export default App;
