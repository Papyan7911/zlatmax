import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Catalog from './pages/Catalog/Catalog';
import Firstsection from './components/FirstSection/FirstSection';
import Secondsection from './components/Secondsection/Secondsection';
import  Card  from './components/Card/Card';

function App() {
  return (
    <Router>
      <Header />
      <Firstsection/>
      <Secondsection/>
      <Card/>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  );
}

export default App;
