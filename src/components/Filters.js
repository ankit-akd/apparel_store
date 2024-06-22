import React from "react";

const Filters = ({filters, setFilters}) => {
    const handleCheckBoxChange = (category, value) => {
        setFilters((prevFilters) => {
            const newFilters = {...prevFilters};
            if(!newFilters[category]){
                newFilters[category] = [];
            }
            if(newFilters[category].includes(value)){
                newFilters[category] = newFilters[category].filter((item) => item !== value);
            }
            else{
                newFilters[category].push(value);
            }
            return newFilters;
        });
    };
   

    return (
        <div className="filters">
            <div className="filter-section">
                <h4>Color</h4>
                <div className="filter">
                <label>
                    <input type='checkbox' value='Red' onChange={() => handleCheckBoxChange('color','Red')} />
                    Red
                </label>
                <label>
                    <input type='checkbox' value='Blue' onChange={() => handleCheckBoxChange('color','Blue')} />
                    Blue
                </label>
                <label>
                    <input type='checkbox' value='Green' onChange={() => handleCheckBoxChange('color','Green')} />
                    Green
                </label>
                <label>
                    <input type='checkbox' value='Black' onChange={() => handleCheckBoxChange('color','Black')} />
                    Black
                </label>
                <label>
                    <input type='checkbox' value='Purple' onChange={() => handleCheckBoxChange('color','Purple')} />
                    Purple
                </label>
                <label>
                    <input type='checkbox' value='White' onChange={() => handleCheckBoxChange('color','White')} />
                    White
                </label>
                <label>
                    <input type='checkbox' value='Grey' onChange={() => handleCheckBoxChange('color','Grey')} />
                    Grey
                </label>
                <label>
                    <input type='checkbox' value='Pink' onChange={() => handleCheckBoxChange('color','Pink')} />
                    Pink
                </label>
                </div>
            </div>
            <div className="filter-section">
                <h4>Gender</h4>
                <div className="filter-option">
                <label>
                    <input type='checkbox' value='Men' onChange={() => handleCheckBoxChange('gender','Men')} />
                    Men
                </label>
                <label>
                    <input type='checkbox' value='Women' onChange={() => handleCheckBoxChange('color','Women')} />
                    Women
                </label>
                </div>
            </div>
            <div className="filter-section">
                <h4>Price</h4>
                <div className="filter-option">
                <label>
                    <input type='checkbox' value='0 - 250' name='price' onChange={() => handleCheckBoxChange('price','0-250')} />
                    Rs 0-250
                </label>
                <label>
                    <input type='checkbox' value='251 - 450' name='price' onChange={() => handleCheckBoxChange('price','251-450')} />
                    Rs 251-450
                </label>
                <label>
                    <input type='checkbox' value='450 and above' name='price' onChange={() => handleCheckBoxChange('price','450 and above')} />
                    Rs 450 and above
                </label>
                </div>
            </div>
            <div className="filter-section">
                <h4>Type</h4>
                <div className="filter-option">
                <label>
                    <input type='checkbox' value='polo' onChange={() => handleCheckBoxChange('type','Polo')} />
                    Polo
                </label>
                <label>
                    <input type='checkbox' value='hoodie' onChange={() => handleCheckBoxChange('type','Hoodie')} />
                    Hoodie
                </label>
                <label>
                    <input type="checkbox" value="basic" onChange={() => handleCheckBoxChange('type','Basic')} />
                    Basic
                </label>
                </div>
            </div>
        </div>
    )
}

export default Filters;