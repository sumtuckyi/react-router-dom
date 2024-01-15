import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
