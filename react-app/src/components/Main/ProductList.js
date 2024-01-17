export default function ProductList() {
    return (
        <div className="pdtList">
            재고 현황 요약
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}


export function ProductCard() {
    return (
        <div className="card">
            <p>상품명</p>
            <p>아이콘</p>
            <p>수량</p>
            <button>+</button>
        </div>
    )
}