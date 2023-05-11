import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ imageURL, alt, largeImage, onClick }) => {
  return (
    <Item>
      <Image
        onClick={onClick}
        src={imageURL}
        alt={alt}
        data-largeimg={largeImage}
        lazyLoad
      />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  imageURL: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
