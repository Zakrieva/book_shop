import { useEffect, useState } from "react";

const Input = ({ products, setProducts, value, setValue, filterArr }) => {

    const searchBook = () => {
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