import Login from './components/login';
import Services from './components/services';
import Diary from './components/diary';
import Administer from './components/administer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Login />
      <Routes>
        <Route path="services" element={<Services />} />
        <Route path="diary" element={<Diary />} />
        <Route path="administer" element={<Administer />} />
      </Routes>
    </Router>
  );
}

export default App;
