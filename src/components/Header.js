import React from 'react';
import styled from 'styled-components';

import backgroundImg from '../assets/img/hero.jpg';
import LogoBox from './LogoBox';
import TextBox from './TextBox';

const Header = () => {
  const Box = styled.header`
    height: 95vh;
    background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 100, 131, 0.8)),
      url(${backgroundImg});
    background-size: cover;
    background-position: top;
    position: relative;

    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  `

  return (
    <Box>
      <LogoBox />
      <TextBox />
    </Box>
  )
}



export default Header;
