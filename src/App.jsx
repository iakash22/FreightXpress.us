import React, { Suspense, lazy, useEffect } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Headers from './controllers/Headers'
import Footer from './controllers/Footer'
import Headroom from 'react-headroom'

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() =>  import('./pages/About'))
const Contact = lazy(() =>  import('./pages/Contact'))
const NotFound = lazy(() =>  import('./pages/NotFound'))

const App = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    scrollTo(0, 0);
  },[pathname])
  return (
    <div className='overflow-x-hidden'>
      <Suspense fallback={""}>
        <Headroom style={{ zIndex: 3000 }}>
          <Headers />
        </Headroom>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App