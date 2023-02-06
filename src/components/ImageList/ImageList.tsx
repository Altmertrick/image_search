import s from './ImageList.module.css';
import { ImageT } from '../../types/types';
import ImageCard from '../ImageCard/ImageCard';

type PropsT = {
  images: Array<ImageT>;
};

const ImageList: React.FC<PropsT> = (props) => {
  const imagesEls = props.images.map((img) => (
    <ImageCard img={img} key={img.id} />
  ));

  return (
    <div className={s.image_list_wrapper}>
      {props.images.length ? imagesEls : 'No images'}
    </div>
  );
};

export default ImageList;
