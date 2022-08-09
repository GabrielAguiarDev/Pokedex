import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Home from './components/Home'
import Pokemon from './components/Pokemon'

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