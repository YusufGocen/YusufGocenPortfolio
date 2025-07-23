import React from 'react'
import {motion} from 'framer-motion'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const Home = () => {
  return (
    <motion.div className='home' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8 , delay:0.2}}>
      <div className='container'>
        <p id='Home'>Hello, I'm</p>
        <h1>Yusuf Göçen</h1>
        <h3 style={{paddingTop:"0.5rem"}}>Connect With Me</h3>
        <div className='links'>
        <a target="_newblank" href="https://www.linkedin.com/in/yusufgocen/">
          <FaLinkedin />
        </a>
        <a target="_newblank" href="https://github.com/YusufGocen">
          <FaGithub />
        </a>
        <a href="mailto:yusufgocenn0@gmail.com">
            <MdEmail />
        </a>        
        </div>
      </div>

      <div id='about' className='Code-Container'>
          <div style={{textAlign:'center' , marginBottom:30}}>
            <h1>About Me</h1>
          </div>  
        <div className='Code'>
          <SyntaxHighlighter language='typescript' style={vscDarkPlus} className='SyntaxCode' customStyle={{margin:0, padding:"2rem", height:"100%", borderRadius:"20px",width:"50rem"
            ,backdropFilter:"blur(10px)",marginBottom:20 , background:"rgba(22, 22, 25, 0.85)"}}>
            { `const AboutMe : DeveloperProfile={
    Name:"Yusuf Göçen",
    title: "Frontend / Mobile Developer",
    location: "İstanbul, Türkiye",
    },
education: {
    university: "İstanbul Aydın University",
    degree: "B.SC. Management Information Systems",
    duration: "2022 - 2026 (Expected)",
    courses: [
      "Algorithms and Programming",
      "Object-Oriented Programming",
      "Web Programming",
      "Database Management Systems"
    ],
   },
experience: [
 {  
    company: "Flo Group",
    role: "Intern",
    location: "İstanbul",
    duration: "Aug 2025 (1 Month)"
  },
  {
    company: "Smartiks Technology Solutions",
    role: "Long-Term Intern",
    location: "İstanbul (On-site)",
    duration: "Oct 2024 - Jun 2025 (9 Months)"
  }       
  ],
stack: {
  languages: ["JavaScript", "TypeScript", "Java", "SQL"],
  technologies: ["HTML", "CSS (Tailwind, Bootstrap)", "React.js", "React Native", "Spring Boot", "Git"]
  },`}
            
          </SyntaxHighlighter>
        </div>
      </div>
    </motion.div>
  )
}
