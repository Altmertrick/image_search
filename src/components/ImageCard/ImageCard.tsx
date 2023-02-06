import { ImageT } from '../../types/types';
import s from './ImageCard.module.css';
import { useState } from 'react';
import ImageModal from '../ImageModal/ImageModal';

type PropsT = {
  img: ImageT;
};

const ImageCard: React.FC<PropsT> = (props) => {
  const { img } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.image_card_wrapper}>
      {isOpen ? (
        <ImageModal isOpen={isOpen} toggleModal={toggleModal} image={img} />
      ) : (
        <></>
      )}
      <div onClick={toggleModal} className={s.image_wrapper}>
        <img
          className={s.image}
          src={img.urls.small}
          alt={img.alt_description}
        />
      </div>
    </div>
  );
};

export default ImageCard;
