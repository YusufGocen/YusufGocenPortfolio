import React from 'react'
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import {projects} from "../data/projects"

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
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} 
    transition={{ duration: 0.6 }} id='project' className='projects'> 
    <h1>My Project</h1>
  <motion.div
    variants={staggerContainer}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className='project-grid '
  >
    {projects.map((project, index) => (
      <motion.div
        key={index}
        variants={fadeInUp}
        whileHover={{ y: -10 }}
        className='project-card'
      >
        <motion.div
          className='project-image'
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}${project.image})`,
          }}
          whileHover={{ scale: 1.05 }}
        />
  
        <h3>{project.title}</h3>
        <p>{project.description}</p>
  
        <div className='project-tech'>
          {project.tech.map((tech, i) => (
            <span key={i}>{tech}</span>
          ))}
        </div>
  
        <div className='project-link'>
          {project.live && (
            <a target='_blank' rel='noopener noreferrer' href={project.live}>
              <FaExternalLinkAlt />
            </a>
          )}
          {project.github && (
            <a target='_blank' rel='noopener noreferrer' href={project.github}>
              <FaGithub />
            </a>
          )}
        </div>
      </motion.div>
    ))}
  </motion.div>
  </motion.div>
  )
}
