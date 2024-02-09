import React from 'react'
import { motion } from "framer-motion";

const App = () => {
const parent = {
  initial :{opacity:0 ,scale:0},
  animate :{opacity:1 , scale: 1},
  exit : {}
}

  const circle = {
    initial :{opacity:0 ,scale:0},
    animate :{opacity:1 , scale:1 , transition:{ease:[0.76 , 0, 0.24,1] ,duration: 1}},
    exit:{opacity :0 , scale:0},
  };

  return (
    <div className='w-full h-screen bg-zinc-900 p-10'>
  
      {/* <motion.div
        variants = {variant}
        initial ="initial"
        animate = "animate"
        exit = "exit"
      className='w-96 h-96 rounded-2xl bg-zinc-700 p-5'>
        <motion.div 
         variants ={variant}
         initial  = "initial"
         animate = "animate"
         exit = "exit"
        className='w-52 h-52 rounded-xl bg-white'></motion.div>
    </motion.div> */}

    <motion.div variants={parent} initial="initial" animate= "animate" exit= "exit" transition={{ ease:[0.76, 0 , 0.24, 1], duration:2 , delayChildren:1, staggerChildren: 0.2}}  className='w-32 h-32 bg-white/50 rounded-3xl flex flex-wrap p-6'>
      <motion.div variants={circle} className='w-10 h-10 bg-white rounded-full'></motion.div>
      <motion.div variants={circle} className='w-10 h-10 bg-white rounded-full'></motion.div>
      <motion.div variants={circle} className='w-10 h-10 bg-white rounded-full'></motion.div>
      <motion.div variants={circle} className='w-10 h-10 bg-white rounded-full'></motion.div>

    </motion.div>
    </div>

  )
}

export default App