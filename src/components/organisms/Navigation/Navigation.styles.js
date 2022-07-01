import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 100%;
  width: 110px;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Logo = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
    line-height: 110%;
    letter-spacing: 0.5px;
    padding: 0 10px;
  }
`;

export const StyledLink = styled(Link)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  text-align: right;
  padding-right: 25px;

  &:nth-child(2) {
    margin-top: 50px;
    margin-bottom: 10px;
  }

  &:not(:nth-child(2)) {
    margin: 10px 0;
  }

  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.darkPurple};
    transition: color 0.2s ease-in-out;
  }
`;
