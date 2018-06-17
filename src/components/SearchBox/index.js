import React from 'react'

const SearchBox = ({ handleChange }) => {
    return (
        <div className="pa2 w-50 mb3">
            <input
                className="pa3 ba b--green bg-lightest-blue w-100"
                type="search"
                placeholder="Search by Name"
                name="search"
                onChange={handleChange}
            />
        </div>
    );
}
export default SearchBox;