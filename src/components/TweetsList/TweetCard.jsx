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

const initialUser = JSON.parse(localStorage.getItem('following-user'));

const TweetCard = item => {
  const [following, setFollowing] = useState(initialUser || []);

  useEffect(() => {
    localStorage.setItem('following-user', JSON.stringify(following));
  }, [following]);

  const ClickHandler = e => {
    const userId = e.currentTarget.dataset.id;

    if (following.includes(userId)) {
      setFollowing(prevState => prevState.filter(id => id !== userId));
    } else {
      setFollowing(prevState => [...prevState, userId]);
    }

    localStorage.setItem('following-user', JSON.stringify(following));
  };

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  return (
    <>
      <ListItem>
        <CardContainer>
          <ImageContainer>
            <Logo src={logoGoIt} alt="Logo GoIT" />
            <Picture src={picture} alt="Chat picture" />
            <Line src={line} alt="Line" />
            <Frame src={frame} alt="Avatar Frame"></Frame>
            <Avatar src={item.avatar} alt={item.user} />
          </ImageContainer>

          <TextContainer>
            <Info>{formatNumber(item.tweets)} TWEETS </Info>
            <Info>
              {following.includes(item.id)
                ? formatNumber(item.followers + 1)
                : formatNumber(item.followers)}{' '}
              FOLLOWERS
            </Info>
          </TextContainer>
          <Button
            filled={!following.includes(item.id) ? false : true}
            type="button"
            onClick={ClickHandler}
            data-id={item.id}
          >
            {!following.includes(item.id) ? 'FOLLOW' : 'FOLLOWING'}
          </Button>
        </CardContainer>
      </ListItem>
    </>
  );
};

export default TweetCard;
