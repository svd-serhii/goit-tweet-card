import AppBar from 'components/AppBar/AppBar';
import { UserRoutes } from 'components/UserRoutes/UserRoutes';
import React from 'react';

const App = () => {
  return (
    <>
      <AppBar />
      <UserRoutes />
    </>
  );
};

export default App;
