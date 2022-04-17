import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/about/About";
import Details from "./Pages/details/Details";
import Blog from "./Pages/home/blog/Blog";
import Home from "./Pages/home/Home/Home";
import Footer from "./Pages/shared/footer/Footer";
import Header from "./Pages/shared/header/Header";
import NotFound from "./Pages/shared/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/service/:serviceId" element={<Details />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
