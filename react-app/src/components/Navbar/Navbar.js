import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function NavBar() {
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
          <li>
            <Link to="/myPage">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}