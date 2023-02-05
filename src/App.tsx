import './App.css';
import React, { useState } from 'react';

import Header from './components/Header/Header';
import ImageList from './components/ImageList/ImageList';

import { ImageT } from './types/types';
import { getImages } from './api/api';

const App: React.FC = () => {
  const [images, setImages] = useState<Array<ImageT>>([]);

  const onSearch = async (term: string) => {
    const images = await getImages(term);
    setImages([...images]);
  };

  return (
    <div className="App">
      <Header submitSearch={onSearch} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
