import Header from "./components/header/Header"
import { Route, Routes } from "react-router";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Collection from "./components/collection/Collection";
import Feature from "./components/feature/Feature";
import Contact from "./components/contact/Contact";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import AddCar from "./components/addCar/AddCar";
import Logout from "./components/logout/Logout";



function App() {
  

  return (
    <>
   
     <Header/>

    <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/collection" element={<Collection />} /> 
        <Route path="/feature" element={<Feature />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addCar" element={<AddCar />} /> 
        <Route path="/logout" element={<Logout />} />
    </Routes>
     
    <Footer/>
    </>
  )
}

export default App
