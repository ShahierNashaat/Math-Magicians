import './App.css';
import {
  Routes, Route, Link, BrowserRouter as Router,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <h1>Math Magicians</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            |
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            |
            <li>
              <Link to="/quote">Quote</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
