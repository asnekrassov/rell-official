import React from 'react'
import Logo from './Logo'
import { Box } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "center", height: "160px"}}>
        <Logo/>
    </Box>
  )
}

export default Footer
