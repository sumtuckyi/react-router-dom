import { ProductCard } from "./ProductList";

export default function Expiration() {
    return (
        <div className="exp-container">
            <p>소비기한 만료 품목</p>
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}