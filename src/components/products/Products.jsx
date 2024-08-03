import Product from "./Product";
import { useEffect } from "react";

const Products = ({ products, setProducts, value, setValue, filterArr }) => {

    return (
        <div className="product-items">
            {value !== '' ? filterArr.map(({ name, img, price, href, id, author, year }) =>
                <Product name={name} img={img} price={price} href={href} key={id} author={author} year={year} />
            ) : products.map(({ name, img, price, href, id, author, year }) =>
                <Product name={name} img={img} price={price} href={href} key={id} author={author} year={year} />
            )}
        </div>
    )
}
export default Products;