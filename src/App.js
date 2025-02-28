
import './App.css';
import Header from "./componentes/Layout/Header";
import Nav from "./componentes/Layout/Nav";
import Footer from "./componentes/Layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homes from "./Pages/Homes";
import Conoceme from "./Pages/Conoceme";
import Galeria from "./Pages/Galeria";
import Servicios from "./Pages/Servicios";
import Novedades from "./Pages/Novedades";
import Contacto from "./Pages/Contacto";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/"element={<Homes/>}/>
        <Route path="Conoceme"element={<Conoceme/>}/>
        <Route path="Galeria"element={<Galeria/>}/>
        <Route path="Servicios"element={<Servicios/>}/>
        <Route path="Novedades"element={<Novedades/>}/>
        <Route path="Contacto"element={<Contacto/>}/>



      </Routes>
      <Footer/>
      
      
      
      </BrowserRouter>
      
      
      
      
    
      </div>
  );
}

export default App;
