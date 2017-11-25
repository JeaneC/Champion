import React from 'react';
import styled, { keyframes } from 'styled-components';

import {
  darkGrey,
  black,
  defaultFontSize
} from '../assets/styleConstants';

const TextBox = () => {
  const moveInLeft = keyframes`
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }

    80% {
      transform: translateX(1rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  `

  const moveInRight = keyframes`
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }

    80% {
      transform: translateX(-1rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  `
  const moveInBottom = keyframes`
    0% {
      opacity: 0;
      transform: translateY(3rem);
    }


    100% {
      opacity: 1;
      transform: translate(0);
    }
  `

  const Box = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  `

  const MainHeader = styled.h1`
    color: #fff;
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 6rem;
  `

  const MainText = styled.span`
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3.6rem;

    animation: ${moveInLeft} 1s ease-out;
  `

  const SubText = styled.span`
    display: block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.75rem;
    text-align: left;

    animation: ${moveInRight} 1s ease-out;
  `

  const Button = styled.a`
    &:link, &:visited {
      text-transform: uppercase;
      text-decoration: none;
      padding: 1.5rem 4rem;
      display: inline-block;
      border-radius: 100px;
      transition: all .2s;
      position: relative;
      background-color: white;
      color: rgb(${darkGrey});
      font-size: ${defaultFontSize};

      animation: ${moveInBottom} .5s ease-out .75s;
      animation-fill-mode: backwards;
    }



    &:hover {
      transform: translateY(-.3rem);
      box-shadow: 0 1rem 2rem rgba(${black},.2);
    }

    &:active {
      transform: translateY(-.1rem);
      box-shadow: 0 .5rem 1rem rgba(${black},.2);
    }

    &::after {
      content: "";
      background-color: white;
      display: inline-block;
      height: 100%;
      width: 100%;
      border-radius: 100px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all .4s;
    }

    &:hover::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }

  `

  return (
    <Box>
      <MainHeader>
        <MainText>Outdoors</MainText>
        <SubText>is where life happens</SubText>
      </MainHeader>
      <Button href="#">Discover our tours</Button>
    </Box>
  )
}



export default TextBox;
