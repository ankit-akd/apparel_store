import React, {useState} from 'react';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import NavigationBar from '../components/NavigationBar';

const HomePage = ({addToCart,cartItems}) => {
    const [searchItem, setSearchItem] = useState('')
    const [filters, setFilters] = useState({});

    return(
        <div className='home-page'>
            <NavigationBar cartItems={cartItems}/>
            <SearchBar setSearchItem={setSearchItem} />
            <Filters filters={filters} setFilters={setFilters} />
            <ProductList searchItem={searchItem} filters={filters} addToCart={addToCart} />
        </div>
    );
};

export default HomePage;

