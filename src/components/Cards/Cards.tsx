import React from 'react'
import { cardElems } from './cardElems'
import CardBody from './CardBody'
import { Box } from '@mui/material'

const Cards = () => {
  return (
    <Box sx={{display: "flex", justifyContent: "space-between", marginBottom: "110px"}}>
        {
            cardElems.map((item) => (
                <CardBody title={item.title} text={item.text} imgPath={item.imgPath}/>
            ))
        }
    </Box>
  )
}

export default Cards