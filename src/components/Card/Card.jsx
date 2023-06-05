import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  CardContainer,
  ImageContainer,
  Info,
  Line,
  Logo,
  Picture,
  Section,
  TextContainer,
} from './Card.styled';

import logoGoIt from '../../images/logo-goit@2x.png';
import picture from '../../images/picture@2x.png';
import line from '../../images/line@2x.png';
import avatar from '../../images/avatar@2x.png';

const initialState = {
  followers: 100500,
  follow: false,
};

const Card = () => {
  const [follow, setFollow] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('follow')) || initialState.follow
    );
  });
  const [count, setCount] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('count')) || initialState.followers
    );
  });

  useEffect(() => {
    window.localStorage.setItem('count', count);
  }, [count]);
  useEffect(() => {
    window.localStorage.setItem('follow', follow);
  });

  const ClickHandler = () => {
    if (!follow) {
      setFollow(true);
      setCount(count + 1);
    }
    if (follow) {
      setFollow(false);
      setCount(count - 1);
    }
  };

  console.log(follow);
  return (
    <>
      <Section>
        <CardContainer>
          <ImageContainer>
            <Logo src={logoGoIt} alt="Logo GoIT" />
            <Picture src={picture} alt="Chat picture" />
            <Line src={line} alt="Line" />
            <Avatar src={avatar} alt="Avatar" />
          </ImageContainer>
          <TextContainer>
            <Info>777 TWEETS </Info>
            <Info>{count} FOLLOWERS</Info>
          </TextContainer>
          <Button filled={follow} type="button" onClick={ClickHandler}>
            {!follow ? 'FOLLOW' : 'FOLLOWING'}
          </Button>
        </CardContainer>
      </Section>
    </>
  );
};

export default Card;
