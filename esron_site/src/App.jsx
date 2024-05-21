import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/navbar/navbar';
import Home from './pages/home/home';
import Discography from './pages/dicography/discography';
import Photos from './pages/photos/photos';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
