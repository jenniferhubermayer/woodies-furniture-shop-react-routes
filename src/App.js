// CSS
import './App.css';

// PACKAGES
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Nav from './Components/Nav';
import About from './Pages/About';
import Home from './Pages/Home';
import Deon from './Pages/Deon';
import Krisha from './Pages/Krisha';
import Jenson from './Pages/Jenson';
import Categories from './Pages/Categories';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Categories />}/>
          <Route path="/products/deon" element={<Deon />} />
          <Route path="/products/jenson" element={<Jenson />} />
          <Route path="/products/krisha" element={<Krisha />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
