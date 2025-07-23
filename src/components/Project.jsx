import React from 'react'
import {motion} from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Project = () => {
  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id='project' className='projects'>
      <h1>My Project</h1>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className='project-grid'>
        
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className='project-card'>
            <div className='project-image' style={{backgroundImage:`url(${import.meta.env.BASE_URL}NöbetciEczane.png)`}}  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}/>
              <h3>Nöbetçi Eczaneler</h3>
              <p>
                 I Developed a cross-platform mobile application using React Native that displays real-time pharmacy availability in Turkey. I implemented Axios for data fetching and designed a clean, responsive UI compatible with both iOS and Android devices.              </p>
              <div className='project-tech'>
                <span>React Native</span>
              </div>
              <div className='project-link'>
                <a target='_newblank' href="https://github.com/YusufGocen/NobetciEczane-MobilApp">
                  <FaGithub/>
                </a>
              </div>
              
        </motion.div>

        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className='project-card'>
            <div className='project-image' style={{backgroundImage:`url(${import.meta.env.BASE_URL}TwitterClone.png)`}}  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}/>
              <h3>React Twitter Clone</h3>
              <p>
                Developed a responsive Twitter Clone using React, Redux for state management, React Router for navigation, and Tailwind CSS for styling. 
              </p>
              <div className='project-tech'>
                <span>React.Js</span>
                <span>React Router</span>
                <span>Redux</span>
                <span>Tailwind</span>
              </div>
              <div className='project-link'>
                <a target='_newblank' href="https://twitter-clone-liard-two.vercel.app/">
                  <FaExternalLinkAlt/>
                </a>
                <a target='_newblank' href="https://github.com/YusufGocen/ReactTwitterClone">
                  <FaGithub/>
                </a>
              </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className='project-card'>
            <div className='project-image' style={{backgroundImage:"url('/CaveHotel.png')"}}  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}/>
              <h3>Cave Hotel Kapadokya</h3>
              <p>
                Cave Hotel Kapadokya website was built using HTML, CSS, and JavaScript. The site allows visitors to explore the rooms, see available services, and learn more about events organized by the hotel.
              </p>
              <div className='project-tech'>
                <span>Html</span>
                <span>Css</span>
                <span>JavaScript</span>
              </div> 
              <div className='project-link'>
                <a target='_newblank' href="https://github.com/YusufGocen/Cave-Hotel">
                  <FaGithub/>
                </a>
              </div>                 
        </motion.div>

        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className='project-card'>
            <div className='project-image' style={{backgroundImage:"url('/LifeFitness.png')"}}  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}/>
              <h3>Life Fitness</h3>
              <p>
                This is a simple and responsive gym website developed using HTML, CSS, and JavaScript. The site includes sections such as clubs, activities, membership packages, and a blog. Users can log in or sign up.
              </p>
              <div className='project-tech'>
                <span>Html</span>
                <span>Css</span>
                <span>JavaScript</span>
              </div>
              <div className='project-link'>
                <a target='_newblank' href="https://github.com/YusufGocen/Life-Fitness">
                  <FaGithub/>
                </a>
              </div>        
        </motion.div>

         <motion.div
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className='project-card'>
            <div className='project-image' style={{backgroundImage:"url('/css-gradiant.png')"}}  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}/>
              <h3>Css Gradiant Generator</h3>
              <p> 
                This is a Css Gradiant Generator with random functionalty .
              </p>
              <div className='project-tech'>
                <span>Html</span>
                <span>Css</span>
                <span>JavaScript</span>
              </div>
              <div className='project-link'>
                <a target='_newblank' href="https://randomcolorpicker-seven.vercel.app/">
                  <FaExternalLinkAlt/>
                </a>
                <a target='_newblank' href="https://github.com/YusufGocen/RandomColorPicker">
                  <FaGithub/>
                </a>
              </div>       
        </motion.div>

        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className='project-card'>
            <div className='project-image' style={{backgroundImage:"url('/WeatherApp1.png')"}}  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}/>
              <h3>Hava Durumu</h3>
              <p>
                Developed a cross-platform weather forecast application using React Native. The app allows users to enter a city name and get real-time weather data along with a 5-day forecast.
              </p>
              <div className='project-tech'>
                <span>React Native</span>
              </div>
              <div className='project-link'>
                <a target='_newblank' href="https://github.com/YusufGocen/ReactNative-WeatherApp">
                  <FaGithub/>
                </a>
              </div>       
        </motion.div>

      </motion.div>
    </motion.div>
  )
}
