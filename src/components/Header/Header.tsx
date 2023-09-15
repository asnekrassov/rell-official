import { Box } from '@mui/material';
import styled from 'styled-components'
import LinkMenu from './LinkMenu';
import Logo from './Logo';

const StyledHeaderOuter = styled.header`
  display: flex;
  margin: 8px 0px;
`;

const Header = () => {
  return (
    <StyledHeaderOuter>
      <Box sx={{width: "50%"}}>
        <Logo/>
      </Box>
      <LinkMenu />
    </StyledHeaderOuter>
  )
}

export default Header
