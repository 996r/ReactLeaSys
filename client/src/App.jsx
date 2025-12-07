import Header from "./components/header/Header"
import { Route, Routes } from "react-router";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Collection from "./components/collection/Collection";
import Feature from "./components/feature/Feature";
import Contact from "./components/contact/Contact";
import Register from "./components/register/Register";
import Login from "./components/login/Login";



function App() {
  

  return (
    <>
   
     <Header/>
    <Routes>
    {/* <Route path="/" element={
              <>
                  <Hero/>
                  <Collection/>
                  <Feature/>
                  <Contact/>
              </>
          } /> */}
          <Route path="/" element={<Hero />} />
         <Route path="/collection" element={<Collection />} /> 
        <Route path="/feature" element={<Feature />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
     
    <Footer/>
    </>
  )
}

export default App
