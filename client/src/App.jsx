import Header from "./components/header/Header"
import {  Routes } from "react-router";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Collection from "./components/collection/Collection";
import Feature from "./components/feature/Feature";
import Contact from "./components/contact/Contact";



function App() {
  

  return (
    <>
    <Header/>
    <Hero/>
    <Collection/>
    <Feature/>
    <Contact/>
    {/* <Routes>

    </Routes> */}
    <Footer/>
    </>
  )
}

export default App
