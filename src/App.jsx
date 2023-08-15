import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import "./App.css";
export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <Link className="logo" to="/">
            #VanLife
          </Link>
          <nav>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/vans">
              Vans
            </Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer>@2023 #VanLife</footer>
      </div>
    </BrowserRouter>
  );
}
