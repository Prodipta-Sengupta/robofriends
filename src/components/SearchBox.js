import React from "react";
const SearchBox = ({onSearchChange,searchField}) => {
    return (
        <div className="">
            <input type="SearchBox" 
            placeholder="searchbox" 
            className="pa3 ba b--green bg-lightest-blue"
            onChange = {onSearchChange}
            ></input>
        </div>
    );
}
export default SearchBox;