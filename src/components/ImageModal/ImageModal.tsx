import s from './ImageModal.module.css';

import { ImageT } from '../../types/types';

type PropsT = {
  image: ImageT;
  isOpen: boolean;
  toggleModal: () => void;
};

const ImageModal: React.FC<PropsT> = (props) => {
  return (
    <div className={s.modal}>
      <span onClick={props.toggleModal} className={s.close}>
        &times;
      </span>
      <div className={s.modal_content}>
        <img src={props.image.urls.regular} id="img01"></img>
      </div>

      <div id="caption">{props.image.description}</div>
    </div>
  );
};

export default ImageModal;
