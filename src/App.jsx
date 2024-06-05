import React, { Suspense, lazy } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Headers from './controllers/Headers'
import Footer from './controllers/Footer'
import Headroom from 'react-headroom'

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() =>  import('./pages/About'))

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Suspense fallback={""}>
        <Headroom style={{ zIndex: 3000 }}>
          <Headers />
        </Headroom>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App