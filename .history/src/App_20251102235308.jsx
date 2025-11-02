import './App.css';
import AddEmployee from './Components/AddEmployee';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ListEmployee from './Components/ListEmployee';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ListEmployee />} />
          <Route path="/employees" element={<ListEmployee />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/edit-employee/:id" element={<AddEmployee />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
