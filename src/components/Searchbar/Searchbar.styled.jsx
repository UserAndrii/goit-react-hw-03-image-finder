import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #ffa500;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-color: inherit;
  cursor: pointer;
  outline: none;
`;

export const SearchIcon = styled(FiSearch)`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #ffa500;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 20px;
  padding-right: 4px;

  @media screen and (max-width: 767px) {
    ::placeholder {
      font: inherit;
      font-size: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    ::placeholder {
      font: inherit;
      font-size: 18px;
    }
  }
`;
