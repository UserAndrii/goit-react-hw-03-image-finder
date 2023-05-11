import { MagnifyingGlass } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#ffa500"
      />
    </Wrapper>
  );
};

export default Loader;
