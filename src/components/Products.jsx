import React from 'react';
import headphone from '../assets/headphone.png';
import laptop from '../assets/laptop.png';
import phone from '../assets/phone.png';
import Product from './Product';

const Products = () => {
  const products = [
    { title: 'Headphones', image: headphone },
    { title: 'Laptop', image: laptop },
    { title: 'Phone', image: phone },
    { title: 'Phone', image: phone },
  ];
  return (
    <div className="-mt-28">
      <div className=" w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:-mt-[150px] lg:grid-cols-4 lg:-mt-[200px] xl:-mt-[300px] mx-auto w-[80vw]  gap-5">
          {products.map((product) => (
            <Product title={product.title} image={product.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
