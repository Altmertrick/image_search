import s from './ImageCard.module.css';

type PropsT = {
  url: string;
};

const ImageCard: React.FC<PropsT> = (props) => {
  return (
    <div className={s.image_card_wrapper}>
      <div className={s.image_wrapper}>
        <img className={s.image} src={props.url} />
      </div>
    </div>
  );
};

export default ImageCard;
