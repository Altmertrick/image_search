import { ImageT } from '../../types/types';

type PropsT = {
  images: Array<ImageT>;
};

type PropsTImg = {
  url: string;
};

const ImageCard: React.FC<PropsTImg> = (props) => {
  return (
    <div>
      <img style={{ withd: '40px' } as any} src={props.url} />
    </div>
  );
};

const ImageList: React.FC<PropsT> = (props) => {
  const imagesEls = props.images.map((img) => (
    <ImageCard url={img.urls.thumb} />
  ));

  return <div>{props.images.length ? imagesEls : 'No images'}</div>;
};

export default ImageList;
