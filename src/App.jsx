import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from "./component/Head/Home";
import Navbar from "./component/Head/Navbar/Navbar";
import Footer from "./component/Head/Footer/Footer";
import Contact1 from "./component/Pages/Contact/Contact";
import Welcome from "./component/Pages/Welcome/Welcome";
import About from "./component/Pages/About/About";
import Services from "./component/Pages/Services/Services";
import PersonalInfo from "./component/Pages/About/PersonalInfo";
import Banner from "./component/Pages/Banner/Banner";
import Contact from "./component/Pages/Contact/Contact";
import ScrollToTop from "./component/Pages/ScrollToTop/ScrollToTop";
import PersonalBloges from "./component/Pages/Bloges/PersonalBloges";
import Gride from "./component/Pages/Grides/Gride";
import Review from "./component/Pages/Review/Review";
import GridAbout from "./component/Layout/GrdeDesigns/GridAbout";
import ExpertDetails from "./component/Layout/Details/ExpertDetails";
import Project from "./component/Pages/Project/Project";

function App() {
  return (
    <>
      <BrowserRouter basename="/Ishan.J-Website">
        {/* <BrowserRouter> */}
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* <Route path="/Welcome" element={<Welcome />} /> */}
          <Route path="/" element={<Head />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Contact1" element={<Contact1 />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/PersonalInfo" element={<PersonalInfo />} />
          <Route path="/Banner" element={<Banner />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/PersonalBloges" element={<PersonalBloges />} />
          <Route path="/Gride" element={<Gride />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/GridAbout" element={<GridAbout />} />
          <Route path="/ExpertDetails" element={<ExpertDetails />} />
          <Route path="/Projects" element={<Project />} />
        </Routes>
        <Gride />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
