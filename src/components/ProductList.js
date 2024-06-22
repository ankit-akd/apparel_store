import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../App.css';

const ProductList = ({searchItem, filters, addToCart}) => {console.log('aaa2',addToCart)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(' https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.log('Error in reading values from API',error))
    },[]);

    const filterProducts = (products) => {
        return products.filter((product) => {console.log('item',products);
            const matchesSearchItem = searchItem ? 
            product.name.toLowerCase().includes(searchItem.toString().toLowerCase()) ||
            product.color.toLowerCase().includes(searchItem.toString().toLowerCase()) ||
            product.type.toLowerCase().includes(searchItem.toString().toLowerCase()) 
            : true;

            const matchesColor = filters.color?.length
            ? filters.color.includes(product.color) : true;

            const matchesGender = filters.gender?.length ?
            filters.gender.includes(product.gender) : true;

            const matchesPrice = filters.price ?
            (filters.price === '0 - 250' && product.price <= 250) ||
            (filters.price === '251 - 450' && product.price >= 251 &&  product.price <= 450) ||
            (filters.price === '450' && product.price > 450) : true;

            const matchesType = filters.type?.length ?
            filters.type.includes(product.type) : true;
            console.log('mmm',matchesColor,matchesGender,matchesPrice,matchesSearchItem,matchesType);


            return matchesSearchItem || matchesColor || matchesGender || matchesPrice || matchesType; 
        });
    };
    const filteredProducts = filterProducts(products);
    console.log('filtered',filteredProducts);

    return (
        <div className='product-list'>
            {filteredProducts.map((element) => (
                <ProductCard key={element.id} product={element} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;