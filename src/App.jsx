import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
