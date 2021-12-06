import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Routes, Route, Link,
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
              <Link to="/Math-Magicians/">Home</Link>
            </li>
            |
            <li>
              <Link to="/Math-Magicians/calculator">Calculator</Link>
            </li>
            |
            <li>
              <Link to="/Math-Magicians/quote">Quote</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/Math-Magicians/" element={<Home />} />
          <Route path="/Math-Magicians/calculator" element={<Calculator />} />
          <Route path="/Math-Magicians/quote" element={<Quote />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
