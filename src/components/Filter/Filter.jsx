import React from 'react';
import { CiSearch } from 'react-icons/ci';
import styles from './Filter.module.css';
import { filterComments } from '../../redux/filterSlice'
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(filterComments(event.target.value)) 
  }

  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          onChange={handleChange}
          className={styles.searchInput}
          type='text'
          id='search'
          placeholder='Search something..'
        />
      </div>
    </div>
  );
};
