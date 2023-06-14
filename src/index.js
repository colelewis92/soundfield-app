import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Clientele from './pages/Clientele';
import Contact from './pages/Contact';
import Equipment from './pages/Equipment';
import Gallery from './pages/Gallery';
import Owner from './pages/Owner';
import NoPage from './pages/NoPage';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="clientele" element={<Clientele />} />
          <Route path="contact" element={<Contact />} />
          <Route path="equipment" element={<Equipment />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="owner" element={<Owner />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
