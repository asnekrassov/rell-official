import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'

type CardBodyType = {
    title: string;
    text: string;
    imgPath: string;
}

const CardBody: FC<CardBodyType> = ({
    title,
    text,
    imgPath,
}) => {
  return (
    <Box
        sx={{
            maxWidth: "375.33px",
            width: "100%",
            maxHeight: "467px",
            height: "100%",
            borderRadius: "40px",
            justifyContent: "space-between",
            padding: "56px 32px",
            background: "linear-gradient(135deg, #1B1E23, #242932)",
        }}
    >
        <Typography sx={{
            fontSize: "32px",
            marginBottom: "40px"
        }}>{title}</Typography>
        <Typography sx={{
            fontSize: "20px",
            marginBottom: "32px",
            maxHeight: "140px",
            height: "140px",
        }}>{text}</Typography>
        <img style={{width: "100%"}} src={imgPath} alt="card"/>
    </Box>
  )
}

export default CardBody