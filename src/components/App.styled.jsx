import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 0 20px;

  //   Mobile
  @media screen and (min-width: 320px) {
    width: 320px;
  }

  // Tablet
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  // Desktop
  @media screen and (min-width: 1280px) {
    width: 1400px;
  }
`;
