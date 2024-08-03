import Input from "./components/input/Input";
import Products from "./components/products/Products";
import Filter from "./components/sort/Sort";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState('')
  const [products, setProducts] = useState([
    { name: 'Гарри Поттер и философский камень', author: 'Джоан Роулинг', year: '1997', img: './product/1.jpg', price: '1100', href: '#', id: 1 },
    { name: 'Гарри Поттер и Тайная комната', author: 'Джоан Роулинг', year: '1998', img: './product/2.jpg', price: '1800', href: '#', id: 2 },
    { name: 'Гарри Поттер и узник Азкабана', author: 'Джоан Роулинг', year: '1999', img: './product/3.jpg', price: '1300', href: '#', id: 3 },
    { name: 'Гарри Поттер и Кубок огня', author: 'Джоан Роулинг', year: '2000', img: './product/4.jpg', price: '1200', href: '#', id: 4 },
    { name: 'Гарри Поттер и Орден Феникса', author: 'Джоан Роулинг', year: '2003', img: './product/5.jpg', price: '1500', href: '#', id: 5 },
    { name: 'Гарри Поттер и Принц-полукровка', author: 'Джоан Роулинг', year: '2005', img: './product/6.jpg', price: '1000', href: '#', id: 6 },
    { name: 'Гарри Поттер и Дары Смерти', author: 'Джоан Роулинг', year: '2007', img: './product/7.jpg', price: '1400', href: '#', id: 7 }])
  let filterArr = products.filter(product => {
    const regex = new RegExp(value, 'gi');
    return product.name.match(regex);
  });
  return (<div>
    <Input products={products} setProducts={setProducts} value={value} setValue={setValue} filterArr={filterArr} />
    <Filter products={products} setProducts={setProducts} />
    <Products products={products} setProducts={setProducts} value={value} setValue={setValue} filterArr={filterArr} />

  </div>
  )
}

export default App;
