import Input from "./components/input/Input";
import Products from "./components/products/Products";
import Sort from "./components/sort/Sort";
import Product from "./components/products/Product";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState('')
  const [products, setProducts] = useState([
    { name: 'Гарри Поттер и философский камень', author: 'Джоан Роулинг', year: '1997', img: './product/books/1.jpg', price: '1100', href: '#', star: 4, id: 1 },
    { name: 'Гарри Поттер и Тайная комната', author: 'Джоан Роулинг', year: '1998', img: './product/books/2.jpg', price: '1800', href: '#', star: 4, id: 2 },
    { name: 'Гарри Поттер и узник Азкабана', author: 'Джоан Роулинг', year: '1999', img: './product/books/3.jpg', price: '1300', href: '#', star: 4, id: 3 },
    { name: 'Гарри Поттер и Кубок огня', author: 'Джоан Роулинг', year: '2000', img: './product/books/4.jpg', price: '1200', href: '#', star: 4, id: 4 },
    { name: 'Гарри Поттер и Орден Феникса', author: 'Джоан Роулинг', year: '2003', img: './product/books/5.jpg', price: '1500', star: 4, href: '#', id: 5 },
    { name: 'Гарри Поттер и Принц-полукровка', author: 'Джоан Роулинг', year: '2005', img: './product/books/6.jpg', price: '1000', star: 4, href: '#', id: 6 },
    { name: 'Гарри Поттер и Дары Смерти', author: 'Джоан Роулинг', year: '2007', img: './product/books/7.jpg', price: '1400', star: 4, href: '#', id: 7 }])
  let filterArr = products.filter(product => {
    const regex = new RegExp(value, 'gi');
    return product.name.match(regex);
  });

  return (<div>

    <header>
      <Input products={products} setProducts={setProducts} value={value} setValue={setValue} filterArr={filterArr} />
      <div className="shopLogo">Harry Potter</div>
    </header>
    <Sort products={products} setProducts={setProducts} />
    <Products products={products} setProducts={setProducts} value={value} setValue={setValue} filterArr={filterArr} />

  </div>
  )
}

export default App;
