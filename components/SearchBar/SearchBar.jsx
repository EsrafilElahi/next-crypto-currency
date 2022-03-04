import React from 'react'
import styles from './SearchBar.module.css'


function SearchBar({ ...props }) {
    return (
        <div className={styles.search_container}>
            <input className={styles.coin_input} {...props} />
        </div>
    )
}

export default SearchBar
