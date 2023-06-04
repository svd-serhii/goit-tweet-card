import { Loader } from 'components/Loader/Loader';
import { fetchUsers } from 'redux/usersOperations';
import { Button, List } from './TweetsList.styled';
import TweetCard from './TweetCard';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const usersPerRow = 3;

const TweetsList = () => {
  const [next, setNext] = useState(usersPerRow);
  const users = useSelector(state => state.users.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  console.log(users);

  const handleMore = () => {
    setNext(next + usersPerRow);
  };
  return (
    <>
      <List>
        {users.isError && (
          <p>
            {' '}
            Oops! Something went wrong :( reboot the page and try again once.
          </p>
        )}
        {users.isLoading && <Loader />}
        {users &&
          users
            ?.slice(0, next)
            ?.map(item => <TweetCard key={item.id} {...item} />)}
      </List>
      {next < users?.length && <Button onClick={handleMore}>Load more</Button>}
    </>
  );
};

export default TweetsList;
