import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LightParts from './pages/LightParts';
import HeavyParts from './pages/HeavyParts';
import Blog from './pages/Blog';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leves" element={<LightParts />} />
            <Route path="/pesadas" element={<HeavyParts />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;