import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.scss';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Menu1 = () => <div>Menu1 Page</div>;

function NavBar() {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu1">Menu1</Link>
          </li>

        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu1" element={<Menu1 />} />
      </Routes>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
