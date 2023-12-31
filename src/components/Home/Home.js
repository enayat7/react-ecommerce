import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import './Home.css';

const Home = () => {

  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPrice, setFilterPrice] = useState('0');
  const [filteredProducts,setFilterProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response =await axios.get('https://dummyjson.com/products');
        const data = response.data.products
        setProduct(data);
        } catch (error) {
          console.error('Failed to fetch products:', error);
        }
      };
      fetchProducts();
  }, []);


  useEffect(() =>{
    let filteredProduct = product
    if (searchTerm) {
      filteredProduct = product.filter(
        (item) => item.brand.toLowerCase().includes(searchTerm.toLowerCase()) || item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if(parseInt(filterPrice)!=0) {
      console.log(filterPrice)
      filteredProduct = filteredProduct.filter((item) => parseInt(item.price) < parseInt(filterPrice));
    }
    setFilterProducts(filteredProduct);
    // console.log("hi")

  },[filterPrice,searchTerm,product])

  return (
    <div>
      <input
        type="text"
        placeholder="Search Products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setFilterPrice(e.target.value)}>
        <option value="0">Filter by Price</option>
        <option value="50">Below 50$</option>
        <option value="300">Below 300$</option>
        <option value="500">Below 500$</option>
        <option value="1000">Below 1000$</option>
        <option value="1500">Below 1500$</option>
      </select>
      <div className="card">
        {filteredProducts?.map((element) => (
          <ProductCard key={element.id}
          brand = {element.brand}
          name = {element.title}
          price = {element.price}
          stock = {element.stock}
          thumbnail = {element.thumbnail}
          discription={element.discription}
          discountPercentage = {element.discountPercentage}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
