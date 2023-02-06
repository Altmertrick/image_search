import s from './SearchBar.module.css';
import { useState } from 'react';

type PropsT = {
  onFormSubmit: (term: string) => void;
};

const SearchBar: React.FC<PropsT> = (props) => {
  const [term, setTerm] = useState<string>('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTerm(e.target.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onFormSubmit(term);
    setTerm(' ');
  };

  return (
    <form className={s.search_bar_wrapper} onSubmit={onFormSubmit}>
      <input placeholder="Search..." onChange={onInputChange} value={term} />
    </form>
  );
};

export default SearchBar;
