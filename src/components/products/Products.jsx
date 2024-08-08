import Product from "./Product";
import { useEffect } from "react";

const Products = ({ products, setProducts, value, setValue, filterArr, setStar }) => {

    return (
        <div className="product-items">
            {value !== '' ? filterArr.map(({ name, img, price, href, id, author, year, star }) =>
                <Product name={name} img={img} price={price} href={href} key={id} author={author} year={year} star={star} setStar={setStar} />
            ) : products.map(({ name, img, price, href, id, author, year, star }) =>
                <Product name={name} img={img} price={price} href={href} key={id} author={author} year={year} star={star} setStar={setStar} />
            )}
        </div>
    )
}
export default Products;