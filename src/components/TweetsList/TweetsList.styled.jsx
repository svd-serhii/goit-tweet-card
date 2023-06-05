import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 10px;
  margin: 0 auto;
  width: 130px;
  background-color: #ebd8ff;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.1;
  text-transform: uppercase;
  margin-top: 20px;

  border: #ebd8ff;
  box-shadow: 0px 3.44px 3.44px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  :hover {
    background-color: #5736a3;
    color: #ffffff;
    scale: 1.1;
  }
`;
