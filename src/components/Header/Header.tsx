import s from './Header.module.css';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

type PropsT = {
  submitSearch: (term: string) => Promise<void>;
};

const Header: React.FC<PropsT> = (props) => {
  const onImagesSearch = (term: string) => {
    props.submitSearch(term);
    console.log(term);
  };

  return (
    <div className={s.header}>
      <h1 className={s.heading}>Search For Images</h1>
      <SearchBar onFormSubmit={onImagesSearch} />
    </div>
  );
};

export default Header;
