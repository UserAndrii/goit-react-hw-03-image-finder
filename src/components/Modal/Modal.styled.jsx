import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.5);

  //   Mobile
  @media screen and (min-width: 320px) {
    width: 320px;
    min-height: 230px;
  }

  // Tablet
  @media screen and (min-width: 768px) {
    width: 670px;
  }

  // Desktop
  @media screen and (min-width: 1280px) {
    width: 940px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 35px;
  height: 35px;
  border: 0;
  background-color: inherit;
  cursor: pointer;
  outline: none;
  color: #ffa500;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #ffd900;
  }
`;

export const Image = styled.img`
  position: relative;
  z-index: 1;
`;
