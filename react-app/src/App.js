import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Main/MainPage';
import MyPage from './components/Accounts/MyPage';

const About = () => <div>About Page</div>;
const Menu1 = () => <div>Menu1 Page</div>;


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/menu1" element={<Menu1 />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
