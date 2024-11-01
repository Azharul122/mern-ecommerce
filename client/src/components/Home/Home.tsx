import React, { useEffect } from 'react'
import Banner from './Banner'
import Hero from './Hero'
import TopProducts from './TopProducts'
import { useDispatch, useSelector } from 'react-redux'
import CheckAuth from './auth/check-auth'
import { Skeleton } from '../ui/skeleton'
import { checkAuth } from '@/store/auth-slice'

const Home = () => {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;
  return (
    <CheckAuth isAuthenticated={isAuthenticated} user={user}>
      <div>
      <Banner />
      <Hero />
      <TopProducts />
    </div>
    </CheckAuth>
  )
}

export default Home