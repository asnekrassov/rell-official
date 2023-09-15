import React from 'react'
import { Box, Typography } from '@mui/material'
import styled from 'styled-components'

const StyledLinkMenu = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

const LinkMenu = () => {
  return (
    <StyledLinkMenu>
      <Typography>ВОЗМОЖНОСТИ</Typography>
      <Typography>ОПИСАНИЕ</Typography>
      <Typography>ДЕМОНСТРАЦИЯ</Typography>
      <Typography>ПРЕДЛОЖЕНИЕ</Typography>
    </StyledLinkMenu>
  )
}

export default LinkMenu