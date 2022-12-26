import React from 'react'
import comunidad1 from '../assets/proyectos/comunidad_1.png'
import {Box, Typography, Button} from '@mui/material'
import "../App.css"
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Comunidad() {
  return (
    <>
        <Box sx={{display:"flex", justifyContent:'space-evenly', margin:"1rem", padding:"1rem", alignItems:"center"}} className="proyecto">
            <img src={comunidad1} alt="comunidad1" className='fotoProyecto' />
            <Box sx={{display:"flex", justifyContent:"flex-start", flexDirection:"column",flexWrap:"wrap", margin:"3rem"}}>
                <Typography variant="h4" color="secondary" sx={{margin:"0.5rem"}}>Comunidad de Trabajo</Typography>
                <Typography variant="body1" color="secondary" sx={{margin:"0.5rem"}}>Comunidad de Trabajo fue un proyecto en equipo para la Universidad Nacional de Hurlingham, bajo el marco de la Práctica Profesional Supervisada (PPS).
                <br />
                Consiste en una bolsa de empleo donde interactúan empresas, postulantes y un usuario administrador. </Typography>
                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                    <Box sx={{display:"flex", margin:"0.5rem" }}>
                        <a href="https://comunidad-trabajo-frontend-v2.vercel.app/" target="_blank" rel="noreferrer" >
                            <Button variant="contained" color="primary" size='medium' sx={{marginRight:"0.5rem"}}>DEMO</Button>
                        </a>
                        <a href="https://github.com/desapp-unahur-G1-2022C1/comunidad-trabajo-frontendV2" target="_blank" rel="noreferrer" >
                            <Button variant="outlined" color="secondary" sx={{alignItems:"center"}} size='medium'><GitHubIcon/>VER CÓDIGO</Button>
                        </a>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
  )
}
