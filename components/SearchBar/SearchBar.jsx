import React from 'react'
import styles from './SearchBar.module.css'


function SearchBar({ ...rest }) {
    return (
        <div className={styles.search_container}>
            <input className={styles.coin_input} {...rest} />
        </div>
    )
}

export default SearchBar
