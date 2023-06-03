import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 380px;
  height: 460px;
  margin: 0 auto;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.58px 6.87px 20.62px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const ImageContainer = styled.div``;

export const Logo = styled.img`
  position: absolute;
  width: 76px;
  height: 22px;
  left: 20px;
  top: 20px;
`;

export const Picture = styled.img`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
`;

export const Avatar = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 150px;
  top: 178px;
`;

export const Line = styled.img`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;
`;

export const TextContainer = styled.div`
  margin-top: 284px;
`;

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
  //   position: absolute;
  //   left: 92px;
  //   top: 374px;
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
