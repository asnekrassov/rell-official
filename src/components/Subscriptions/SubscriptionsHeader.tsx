import { Box, Button, ButtonProps, Typography } from '@mui/material'
import React, { FC } from 'react'
import styled from 'styled-components';

type HeaderBodyType = {
    title: string;
    price: string;
    priceText: string;
    underText: string;
    titleColor: string;
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "white !important",
    background: "linear-gradient(180deg, #6D38FF 0%, #4921CA 50.94%)",
    borderRadius: "38px !important",
    padding: "16px 40px !important",
    fontSize: "22px !important"
  }));

const HeaderBody: FC<HeaderBodyType> = ({
    title,
    price,
    priceText,
    underText,
    titleColor,
}) => {
    return (
        <Box
            sx={{
                maxWidth: "360.5px",
                width: "100%",
                padding: "80px 24px 48px 24px"
            }}
        >
            <Box sx={{
                alignItems: "center",
                lineHeight: "35.4px"
            }}>
                <Typography sx={{color: titleColor, fontWeight: 700, fontSize: "40px", lineHeight: "35.4px",textAlign: "center", mb: "16px"}}>{title}</Typography>
                <Box sx={{
                    maxHeight: "100px",
                    height: "100px"
                }}>
                    <Typography sx={{fontSize: "40px", lineHeight: "35.4px", textAlign: "center", mb: "10px"}}>{price}</Typography>
                    <Typography sx={{fontSize: "16px", lineHeight: "17.6px", textAlign: "center", mb: "58px"}}>{priceText}</Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: "center", mb: "56px"}}><ColorButton>Заказать</ColorButton></Box>
                <hr/>
                <Typography sx={{mt: "40px", fontSize: "16px", color: "#9D9D9D"}}>{underText}</Typography>
            </Box>   
        </Box>
    )
}

const SubscriptionsHeader = () => {
  return (
    <Box
        sx={{
            maxHeight: "469px",
            height: "100%",
            background: "linear-gradient(180deg, #13111A 0%, #131319 34.26%)",
            display: "flex",
            justifyContent: "space-between"
        }}
    >
        <Box>
            <img style={{width: "100%"}} src="./bubles.png" alt="bubles"/>
        </Box>
        <Box>
            <HeaderBody title='STANDART' titleColor='#7CE0FE' price='50 000 &#8381;' priceText='за наносекунду' underText='Для крупных площадок и сервисов'/>
        </Box>
        <Box>
            <HeaderBody title='PREMIUM' titleColor='#FD9292' price='80 000 &#8381;' priceText='за наносекунду' underText='Для крупных площадок и сервисов'/>
        </Box>
        <Box>
            <HeaderBody title='ENTERPISE' titleColor='#BC93FF' price='' priceText='Цена формируется исходя из ваших потребностей' underText='Для крупных площадок и сервисов'/>
        </Box>
    </Box>
  )
}

export default SubscriptionsHeader