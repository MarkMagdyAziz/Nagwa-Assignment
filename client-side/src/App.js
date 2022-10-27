import Navbar from './components/navbar/Navbar';
import './App.css';
import Practice from './pages/practice/Practice';
import { Routes, Route } from 'react-router-dom';
import Notfound from './pages/notfound/Notfound';
import Rank from './pages/rank/Rank';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Practice />}
        />
        <Route
          path="/rank"
          element={<Rank />}
        />
        <Route
          path="*"
          element={<Notfound />}
        />
      </Routes>
    </>
  );
}

export default App;
