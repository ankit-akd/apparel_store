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
    
    const handleRadioChange = (category, value) => {
        setFilters((prevFilters) => {
            const newFilters = {...prevFilters};
            newFilters[category] = value;
            return newFilters;
        });
    };

    return (
        <div className="filters">
            <div className="filter-section">
                <h4>Color</h4>
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
            <div className="filter-section">
                <h4>Gender</h4>
                <label>
                    <input type='checkbox' value='Men' onChange={() => handleCheckBoxChange('gender','Men')} />
                    Men
                </label>
                <label>
                    <input type='checkbox' value='Women' onChange={() => handleCheckBoxChange('color','Women')} />
                    Women
                </label>
            </div>
            <div className="filter-section">
                <h4>Price</h4>
                <label>
                    <input type='radio' value='0 - 250' name='price' onChange={() => handleRadioChange('price','0-250')} />
                    Rs 0-250
                </label>
                <label>
                    <input type='radio' value='251 - 450' name='price' onChange={() => handleRadioChange('price','251-450')} />
                    Rs 251-450
                </label>
                <label>
                    <input type='radio' value='450 and above' name='price' onChange={() => handleRadioChange('price','450 and above')} />
                    Rs 450 and above
                </label>
            </div>
            <div className="filter-section">
                <label>
                    <input type='radio' value='polo' onChange={() => handleRadioChange('type','Polo')} />
                    Polo
                </label>
                <label>
                    <input type='radio' value='hoodie' onChange={() => handleRadioChange('type','Hoodie')} />
                    Hoodie
                </label>
                <label>
                    <input type="radio" value="basic" onChange={() => handleRadioChange('type','Basic')} />
                    Basic
                </label>
            </div>
        </div>
    )
}

export default Filters;