import './App.css';
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeaturedProducts from './components/FeaturedProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
import Admin from './components/Admin';
import Profile from './components/Profile';
import AppContext, { IAppContext, User } from './components/AppContext';
const LazyAbout = React.lazy(() => import('./components/About'))

const App = () => {

  const [appContext, setAppContext] = useState<IAppContext>({
    user: undefined
  });

  const setUser = (user: User | undefined) => {
    setAppContext({
      ...appContext,
      user
    });

  };

  return (
    <AppContext.Provider value={appContext}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home setUser={setUser} />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/about' element={
          <React.Suspense fallback='Loading...'>
            <LazyAbout />
          </React.Suspense>
        } />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />} >
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />} >
          <Route path=':userId' element={<UserDetail />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
