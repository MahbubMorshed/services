import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/about/About";
import Home from "./Pages/home/Home/Home";
import Footer from "./Pages/shared/footer/Footer";
import Header from "./Pages/shared/header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
