import Product from "./Product";


const Products = ({ products }) => {

    return (
        <div className="product-items">
            {products.map(({ model, img, price, href, id, author, year }) =>
                <Product model={model} img={img} price={price} href={href} key={id} author={author} year={year} />
            )}
        </div>
    )
}
export default Products;