import React from 'react';
import styled from 'styled-components';

import CenterTextWrapper from './CenterTextWrapper';
import { Row, Col } from './grid';

import {
  lightGrey1,
  primaryLightColor,
  primaryDarkColor,
  black
} from '../assets/styleConstants';

const Main = () => {
  const About = styled.section`
    background-color: ${lightGrey1};
    padding: 25rem 0;
    margin-top: -20vh;
  `

  const Header = styled.h2`
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

  return (
    <About>
      <CenterTextWrapper>
        <Header>
          Exciting Tours for adventurous people
        </Header>
      </CenterTextWrapper>
      <Row>
        <Col ratio={[1,2]}/>
        <Col ratio={[1,2]}/>
      </Row>
      <Row>
        <Col ratio={[1,3]}/>
        <Col ratio={[1,3]}/>
        <Col ratio={[1,3]}/>
      </Row>
      <Row>
        <Col ratio={[1,3]}/>
        <Col ratio={[2,3]}/>
      </Row>
      <Row>
        <Col ratio={[1,4]}/>
        <Col ratio={[1,4]}/>
        <Col ratio={[1,4]}/>
        <Col ratio={[1,4]}/>
      </Row>
      <Row>
        <Col ratio={[1,4]}/>
        <Col ratio={[1,4]}/>
        <Col ratio={[2,4]}/>
      </Row>
      <Row>
        <Col ratio={[1,4]}/>
        <Col ratio={[3,4]}/>
      </Row>
    </About>
  )
}

export default Main
