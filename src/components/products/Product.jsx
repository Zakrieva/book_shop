const Product = ({ name, img, price, href, id, author, year }) => {
    return (
        <div className="product-item" key={id} >
            <div className="product-item-img">
                <img src={img}></img>
            </div>

            <div className="product-list">
                <a href={href}>{name}</a>
                <p>{author}</p>
                <p>{year}</p>
                <span className="price">${price}</span>
            </div>
        </div>)
}

export default Product;