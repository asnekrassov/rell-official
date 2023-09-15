import { Box, Typography } from '@mui/material'
import React from 'react'

const Logo = () => {
  return (
    <Box sx={{
      display: "flex",
    }}>
      <Box sx={{marginRight: "15px"}}>
        <img src="./logo.png" alt="logo"></img>
      </Box>
      <Typography>
          RELL
          <br/>
          Technologies
      </Typography>
    </Box>
  )
}

export default Logo
