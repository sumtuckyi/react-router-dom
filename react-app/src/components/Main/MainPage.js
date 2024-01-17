import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Button from '../Buttons/Button';
import ProductList from '../Main/ProductList';
import Message from '../Messages/Message';
import ClockWidget from './Clock';
import Expiration from './expiration';

export default function Home() {
	return (
		<div className='Page-container'>
			<header>
				<Button 
					text="장바구니"
					class_name="btn-main-order"
			 	/>
				<ClockWidget />
			</header>
			<ProductList />
			<div className='Msg-container'>
				<Message text="주문하신 상품이 금일 15-17시에 배송될 예정입니다." />
				<Message text="사과 소비기한이 3일 남았습니다." />
				<Message text="[제주 삼다수]생수 (2L X 6개)" />
			</div>
			<Expiration />
		</div>
	)
}