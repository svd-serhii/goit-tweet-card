import { Loader } from 'components/Loader/Loader';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('../Pages/MainPage'));
const MoreTweets = lazy(() => import('../Pages/MoreTweets'));

export const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tweets" element={<MoreTweets />} />
      </Routes>
    </Suspense>
  );
};
