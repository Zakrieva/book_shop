import { useEffect, useState } from "react";

const Input = ({ products, setProducts, value, setValue }) => {


    const searchBook = () => {
        let filterArr = products.filter(product => {
            const regex = new RegExp(value, 'gi');
            return product.name.match(regex);
        });
        setProducts(filterArr);
    };

    useEffect(() => {
        searchBook()
        setProducts(products)
    }, [products]);


    return (
        <header>
            <div>
                <input
                    type="text"
                    placeholder="Название книги"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={searchBook}>Поиск</button>
            </div>
            <div className="shopLogo">Harry Potter</div>
        </header>
    );
};

export default Input;