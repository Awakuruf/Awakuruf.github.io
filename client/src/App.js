import Home from "./Pages/index";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutMe from "./Pages/AboutMe";
import Work from "./Pages/Work";
import Projects from "./Pages/Projects";
import { Route, Routes } from "react-router-dom";
import Volunteer from "./Pages/Volunteer";


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<Work />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
