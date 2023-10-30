import Login from './components/login';
import Header from './components/header';
import Diary from './components/diary';
import Services from './components/services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="diary" element={<Diary />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
