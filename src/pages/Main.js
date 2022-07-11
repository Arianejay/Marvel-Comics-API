import React from 'react'
import Home from './Home'
import {Routes, Route, useLocation} from "react-router-dom"
import {AnimatePresence} from "framer-motion"
import HeroInfo from './HeroInfo'

const Main = () => {
  const location = useLocation();

  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} exact />
          <Route path="/heroinfo/:name" element={<HeroInfo />} exact />
        </Routes>
      </AnimatePresence>
  )
}

export default Main