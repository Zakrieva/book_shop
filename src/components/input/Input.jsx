import { useState } from "react";

const Input = ({ products }) => {

    const searchBook = () => {
        products.map((name === name.products))
    }

    return (
        <header>
            <form action="">
                <input type="text"
                    placeholder="Название книги"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <button onClick={searchBook}>Поиск</button>
            </form>
            <div className="shopLogo">Harry Potter</div>
        </header>)
}

export default Input;