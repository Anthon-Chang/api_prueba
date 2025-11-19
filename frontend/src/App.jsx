
//import AnimeList from "./components/animeList";
//import PlanList from "./components/PlanList";
import Home from "./pages/home.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Servicios from "./pages/Servicios";
import Login from "./pages/Login";
import PlanDetail from "./pages/PlanDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios/>} />
          <Route path="/about" element={<Home/>} />
          <Route path="/contact" element={<Home/>} />
          <Route path="/plans/:id" element={<PlanDetail/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
