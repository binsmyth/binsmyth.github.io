import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Skills from './pages/Skills/Skills';
import Examples from './pages/Examples/Examples';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <div className="App">
      <div id="home" className="home-div">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/examples" element={<Examples />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
