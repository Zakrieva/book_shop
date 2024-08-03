

const Filter = ({ products, setProducts }) => {
    const priceLower = () => {
        const priceLowerArr = JSON.parse(JSON.stringify(products))
        priceLowerArr.sort((a, b) => a.price > b.price ? -1 : 1)
        setProducts(priceLowerArr)
    }
    const priceMore = () => {
        const priceMoreArr = JSON.parse(JSON.stringify(products))
        priceMoreArr.sort((a, b) => a.price > b.price ? 1 : -1)
        setProducts(priceMoreArr)
    }
    return (
        <div className="filter__buttons">
            <button onClick={priceMore} >Цена ↑</button>
            <button onClick={priceLower}>Цена ↓</button>
        </div>
    )
}
export default Filter;
