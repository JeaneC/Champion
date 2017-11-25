import React from 'react';
import styled from 'styled-components';

import image1 from '../assets/img/nat-1-large.jpg';
import image2 from '../assets/img/nat-2-large.jpg';
import image3 from '../assets/img/nat-3-large.jpg';

import CenterTextWrapper from './common/CenterTextWrapper';
import BottomMargin from './common/BottomMargin';
import ImageWrapper from './common/ImageWrapper';
import { Row, Col } from './grid';

import {
  lightGrey1,
  primaryLightColor,
  primaryDarkColor,
  primaryColor,
  black,
  defaultFontSize
} from '../assets/styleConstants';

const Main = () => {
  const About = styled.section`
    background-color: rgb(${lightGrey1});
    padding: 25rem 0;
    margin-top: -20vh;
  `

  const Header1 = styled.h2`
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right, rgb(${primaryLightColor}), rgb(${primaryDarkColor}));
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: .2rem;
    transition: all .2;

    &:hover {
      transform: skewY(2deg) skewX(15deg) scale(1.1);
      text-shadow: .5rem 1rem 2rem rgba(${black}, .2)
    }
  `

  const Header2 = styled.h3`
    font-size: ${defaultFontSize};
    font-weight: 700;
    text-transform: uppercase;
  `

  const Content = styled.p`
    font-size: ${defaultFontSize};

    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  `

  const Button = styled.a`
    &:link,
    &:visited {
      font-size: ${defaultFontSize};
      font-weight: 600;
      color: rgb(${primaryColor});
      display: inline-block;
      text-decoration: none;
      border-bottom: 1px solid rgb(${primaryColor});
      padding: 3px 10px 3px 10px;

      transition: all .2s;
    }

    &:hover {
      background-color: rgb(${primaryColor});
      border-radius: 5px;
      color: white;
      box-shadow: 0 1rem 2rem rgba(${black}, .15);
      transform: translateY(-2px);
    }

    &:active {
      border-radius: 5px;
      box-shadow: 0 1rem 2rem rgba(${black}, .15);
      transform: translateY(0);
    }
  `
  const Composition = styled.div`
    position: relative;
    transition: transform 1s;

    &:hover, img:not(:hover) {
      transform: scale(.95);
    }
  `

  return (
    <About>
      <CenterTextWrapper>
        <Header1>
          Exciting Tours for adventurous people
        </Header1>
        <BottomMargin large />
      </CenterTextWrapper>
      <Row>
        <Col ratio={[1,2]}>
          <Header2>You're going to fall in love with nature</Header2>
          <BottomMargin small />
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel interdum tellus.
            Curabitur quis magna at neque mollis sollicitudin sed a felis. Sed vel quam eu sapien feugiat mattis.
            Curabitur quis Ut vel interdum tellus.
          </Content>

          <Header2>You're going to fall in love with nature</Header2>
          <BottomMargin small />
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel interdum tellus.
            Curabitur quis magna at neque mollis sollicitudin sed a felis.
          </Content>

          <Button href="#" >Learn more &rarr;</Button>
          </Col>
        <Col ratio={[1,2]}>
          <Composition>
            <ImageWrapper left="0" top="-2rem" src={image1}></ImageWrapper>
            <ImageWrapper right="0" top="2rem" src={image2}></ImageWrapper>
            <ImageWrapper left="20%" top="10rem" src={image3}></ImageWrapper>
          </Composition>
        </Col>
      </Row>
    </About>
  )
}

export default Main
