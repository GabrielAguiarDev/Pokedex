import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'

import Home from './components/pages/Home'
import Pokemon from './components/pages/Pokemon'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact="true" element={<Home />}></Route>
        <Route path="/pokemon" element={<Pokemon />}></Route>
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;