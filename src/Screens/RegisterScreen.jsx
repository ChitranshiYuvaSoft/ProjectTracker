import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'
import FormComponent from '../Components/RegisterScreen/FormComponent'

const RegisterScreen = () => {
  return (
    <>
    <Navbar/>
    <Box sx={{width:"100%", height:"90vh", display:"flex"}}>
        <Box sx={{width:"60%", height:"100%", backgroundColor:"teal",display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img src="./Image/registerBg.webp" alt="noImg" width={"100%"} height={"100%"} style={{boxShadow:"inset 0rem 0rem 10rem #FFFFFF"}}/>
        </Box>
        <Box sx={{width:"40%", height:"100%", backgroundColor:"#A4C7E7", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"inset 0rem 0rem 10rem #FFFFFF"}}>
            <Box sx={{width:"95%", height:"95%", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                <Box sx={{width:"100%", height:"20%", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                    <Typography variant='h4' fontWeight={"bold"} color={"white"} sx={{textTransform:"uppercase"}}>
                        Register
                    </Typography>
                    <Typography variant='h5' fontWeight={"bold"}  sx={{textTransform:"uppercase", color:"#031D36", marginTop:"1rem"}}>
                      It's Completely Free
                    </Typography>
                </Box>
                <Box sx={{width:"100%", height:"60%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <FormComponent/>
                </Box>
                <Box sx={{width:"90%", height:"20%", display:"flex", padding:"2rem", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                    <Box sx={{width:"60%", height:"50%", display:"flex", padding:"2rem", alignItems:"center", justifyContent:"space-around"}}>
                        <Box sx={{width:"20%", height:"80%", display:"flex", padding:"2rem", alignItems:"center", justifyContent:"center",borderRadius:"50%", backgroundColor:"white"}}></Box>
                        <Box sx={{width:"20%", height:"80%", display:"flex", padding:"2rem", alignItems:"center", justifyContent:"center",borderRadius:"50%", backgroundColor:"white"}}></Box>
                        <Box sx={{width:"20%", height:"80%", display:"flex", padding:"2rem", alignItems:"center", justifyContent:"center",borderRadius:"50%", backgroundColor:"white"}}></Box>
                    </Box>
                    <Button variant='contained'fullWidth sx={{paddingBlock:"1rem",rounded:"0", backgroundColor:"#031D36", fontSize:"1.2rem", marginTop:"1rem"}} >Create Account</Button>
                </Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default RegisterScreen
