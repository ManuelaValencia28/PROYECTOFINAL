import Login from './components/login';
import Header from './components/header';
import Services from './components/services';
import Menu from './components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="menu" element={<Menu />} />
        <Route path="services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

