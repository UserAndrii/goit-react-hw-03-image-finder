import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <Btn type="button" onClick={onClick} aria-label="Load more">
      Load more...
    </Btn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
