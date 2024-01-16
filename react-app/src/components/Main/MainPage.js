import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Button from '../Buttons/Button';
import ProductList from '../Main/ProductList';
import Message from '../Messages/Message';

export default function Home() {
	return (
		<div>
			<p>Home Page</p>
			<Button text="장바구니로 이동해서 주문"/>
			<div className='clock'>시계자리</div>
			<ProductList />
			<div className='msgContainer'>
				<Message />
				<Message />
				<Message />
			</div>
		</div>
	)
}