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
            <Link to="/about">재고관리</Link>
          </li>
          <li>
            <Link to="/menu1">재고추가</Link>
          </li>
          <li>
            <Link to="/menu2">정기배송</Link>
          </li>
          <li>
            <Link to="/myPage">마이페이지</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}