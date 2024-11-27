import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Example from './pages/example/Example';
import Projects from './pages/projects/Projects';
import Contacts from './pages/contacts/Contacts';
import NavBar from './pages/navBar/NavBar';
import Main from './pages/main/Main'
import Footer from './pages/footer/Footer';
import Cursor from './components/Cursor';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Cursor/>
      <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer/>
    </BrowserRouter>

  );
}

export default App;
