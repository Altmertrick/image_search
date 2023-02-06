import { ImageT } from '../../types/types';
import s from './ImageCard.module.css';

type PropsT = {
  img: ImageT;
};

const ImageCard: React.FC<PropsT> = (props) => {
  const { img } = props;

  return (
    <div className={s.image_card_wrapper}>
      <div className={s.image_wrapper}>
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
