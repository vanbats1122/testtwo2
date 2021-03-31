import React from 'react'
import './SearchBar.css'

function SearchBar({onChange, value, placeholder}) {
    return (
        <input type="text" placeholder={placeholder} onChange={onChange} value={value} />
     )
}

export default SearchBar
