import { useState } from "react"
const Product = ({ name, img, price, href, id, author, year, star }) => {

    const getScore = (starNum) => {
        star = starNum
    }

    return (
        <div className="product-item" key={id} >
            <div className="product-item-img">
                <img src={img}></img>
            </div>

            <div className="product-list">
                <div className="product-score">{star}<img src="./product/star/star.png" alt="" /></div>
                <a href={href}>{name}</a>
                <p>{author}</p>
                <p>{year}</p>
                <span className="price">${price}</span>
                <div className="score">
                    <img className="star1" onClick={() => getScore(1)} src="./product/star/star.png" alt="" />
                    <img className="star2" onClick={() => getScore(2)} src="./product/star/star.png" alt="" />
                    <img className="star3" onClick={() => getScore(3)} src="./product/star/star.png" alt="" />
                    <img className="star4" onClick={() => getScore(4)} src="./product/star/star.png" alt="" />
                    <img className="star5" onClick={() => getScore(5)} src="./product/star/star.png" alt="" />
                </div>
            </div>
        </div>)
}

export default Product;