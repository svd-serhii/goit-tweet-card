import styled from 'styled-components';

export const ListItem = styled.li``;

export const ImageContainer = styled.div``;

export const CardContainer = styled.div`
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.58px 6.87px 20.62px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  margin-top: 20px;
  margin-left: 20px;
  width: 76px;
  height: 22px;
`;

export const Picture = styled.img`
  width: 308px;
  height: 168px;
  margin-left: 36px;
`;
export const Frame = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 0px;
`;
export const Avatar = styled.img`
  width: 52px;
  height: 52px;
`;

export const Line = styled.img`
  width: 380px;
  height: 8px;
`;

export const TextContainer = styled.div``;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px auto;
  color: #ebd8ff;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  margin: 0 auto;
  width: 196px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;

  border: #ebd8ff;
  box-shadow: 0px 3.44px 3.44px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: ${({ filled }) => (filled ? '#5CD3A8' : '#ebd8ff')};

  :hover {
    box-shadow: 0px 3.44px 3.44px rgba(0, 0, 0, 0.75);
  }
`;
