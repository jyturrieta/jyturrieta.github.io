import React from 'react';
import { Box } from '@mui/material';
import html5 from '../assets/svg/html5-custom.svg';
import css3 from '../assets/svg/logo-css3-custom.svg';
import js from '../assets/svg/javascript-fill-custom.svg';
import react from '../assets/svg/react-custom.svg';
import mui from '../assets/svg/mui-custom.svg';
import node from '../assets/svg/node-js-custom.svg';
import postgres from '../assets/svg/postgresql-custom.svg';
import git from '../assets/svg/git-custom.svg';
import github from '../assets/svg/github-custom.svg';
import sequelize from '../assets/svg/sequelize-custom.svg'



import "../App.css"

export default function Herramientas() {
  return (
    <>
        <Box sx={{display:"flex", justifyContent:"center", padding:"2rem"}}>
            <Box sx={{display:"flex", justifyContent:"center", alignItems:"center",backgroundColor:"#212529", margin:"1rem", border:"solid", borderRadius:"1rem", borderColor:"#1C1F24", flexWrap:"wrap"}}>
                <img src={html5} alt="html5" className='logos'/>
                <img src={css3} alt="css3" className='logos'/>
                <img src={js} alt="js" className='logos'/>
                <img src={react} alt="react" className='logos'/>
                <img src={mui} alt="mui" className='logos'/>
                <img src={node} alt="node" className='logos'/>
                <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="express" className='logos' />
                <img src={sequelize} alt="sequelize" className='logos'/>
                <img src={postgres} alt="postgresql" className='logos'/>
                <img src={git} alt="git" className='logos'/>
                <img src={github} alt="github" className='logos'/>
            </Box>
        </Box>
    </>
  )
}
