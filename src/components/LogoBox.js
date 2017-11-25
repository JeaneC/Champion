import React from 'react';
import whiteLogo from '../assets/img/logo-white.png';
import styled from 'styled-components';

const LogoBox = () => {
  const Box = styled.div`
    position: absolute;
    top: 4rem;
    left: 4rem;
  `

  const Image = styled.img`
    height: 3.5rem;
  `

  return (
    <Box>
      <Image src={whiteLogo} alt="logo" />
    </Box>
  )
}


export default LogoBox;
