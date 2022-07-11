import React from 'react'
import Hero from '../components/Hero'
import {motion} from "framer-motion"

const Home = () => {
  return (
    <motion.div
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: {duration: 0.3}}}
    >
        <Hero />
    </motion.div>
  )
}

export default Home