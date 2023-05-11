import { Wrap, Image } from './HandleError.styled';
import PropTypes from 'prop-types';

const HandleError = ({ imageURL, alt }) => {
  return (
    <Wrap>
      <Image src={imageURL} alt={alt} />
    </Wrap>
  );
};

HandleError.propTypes = {
  imageURL: PropTypes.string,
  alt: PropTypes.string,
};

export default HandleError;
