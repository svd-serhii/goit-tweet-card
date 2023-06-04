import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  CardContainer,
  Frame,
  Info,
  Line,
  ListItem,
  Logo,
  Picture,
  TextContainer,
  ImageContainer,
} from './TweetCard.styled';

import logoGoIt from '../../images/logo-goit@2x.png';
import picture from '../../images/picture@2x.png';
import line from '../../images/line@2x.png';
import frame from '../../images/frame.png';

const TweetCard = item => {
  const [follow, setFollow] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('follow', follow);
  });

  const ClickHandler = () => {
    if (!follow) {
      setFollow(true);
    }
    if (follow) {
      setFollow(false);
    }
  };

  console.log(follow);
  return (
    <>
      <ListItem>
        <CardContainer>
          <ImageContainer>
            <Logo src={logoGoIt} alt="Logo GoIT" />
            <Picture src={picture} alt="Chat picture" />
            <Line src={line} alt="Line" />
            <Frame src={frame} alt="Avatar Frame"></Frame>
            <Avatar src={item.avatar} alt="Avatar" />
          </ImageContainer>

          <TextContainer>
            <Info>{item.tweets} TWEETS </Info>
            <Info>{item.followers} FOLLOWERS</Info>
          </TextContainer>
          <Button filled={follow} type="button" onClick={ClickHandler}>
            {!follow ? 'FOLLOW' : 'FOLLOWING'}
          </Button>
        </CardContainer>
      </ListItem>
    </>
  );
};

export default TweetCard;
