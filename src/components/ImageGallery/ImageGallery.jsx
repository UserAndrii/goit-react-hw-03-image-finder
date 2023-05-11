import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, handleImageClick }) => {
  return (
    <ImageGalleryList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            imageURL={webformatURL}
            alt={tags}
            largeImage={largeImageURL}
            onClick={handleImageClick}
          />
        );
      })}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  handleImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
