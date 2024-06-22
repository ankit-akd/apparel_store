import React from "react";
import '../App.css';

const SearchBar = ({setSearchItem}) => {
const handleSearch = (event) => {
    if(event.key === 'Enter'){
        event.preventDefault();
        setSearchItem(event.target.value);
    }
}

const handleOnClick = () => {
    const inputValue = document.querySelector('.search-bar input').value;
    setSearchItem(inputValue);
}
return (
    <div className="search-bar">
        <input type='text' placeholder="Search product" onKeyDown={handleSearch} />
        <button className="search-button-container" onClick={handleOnClick}>Search</button>
    </div>
)
}

export default SearchBar;