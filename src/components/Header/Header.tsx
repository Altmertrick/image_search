import { useState } from 'react';

type PropsT = {
  submitSearch: (term: string) => Promise<void>;
};

const Header: React.FC<PropsT> = (props) => {
  const [term, setTerm] = useState<string>('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTerm(e.target.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.submitSearch(term);
    console.log(term);
    setTerm(' ');
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input onChange={onInputChange} value={term} />
      </form>
    </div>
  );
};

export default Header;
