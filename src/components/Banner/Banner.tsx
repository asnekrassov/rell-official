import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import Carousel from './Carousel'

type BannerType = {
    children: any;
}

const Banner: FC<BannerType> = ({ children }) => {
  return (
    <Box>
    <Box sx={{
        display: "flex",
        width: "100%"
    }}>
        <Box>
            <Typography sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "777px",
                fontSize: "32px",
            }}>
                СЕРВИС ОБРАБОТКИ <br/> ОБРАТНОЙ СВЯЗИ ПОЛЬЗОВАТЕЛЕЙ
            </Typography>
        </Box>
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "777px",
                width: "50%"
            }}
        >
            <Typography sx={{
                position: "relative",
                left: "0%",
                top: 200
            }}>Риски</Typography>
            <Typography sx={{
                position: "relative",
                top: 0,
                left: "8%"
            }}
            >Возможности</Typography>
            <Typography
                sx={{
                    position: "relative",
                    top: 350,
                    left: "8%"
                }}
            >Возможности</Typography>
            <Typography sx={{
                position: "relative",
                top: 30,
                left: "55%"
            }}
            >Возможности</Typography>
            <Typography sx={{
                position: "relative",
                top: 230,
                left: "55%"
            }}
            >Возможности</Typography>
            <Carousel />
        </Box>
    </Box>
    {children}
    </Box>
  )
}

export default Banner