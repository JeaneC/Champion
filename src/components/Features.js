import React from 'react';
import styled from 'styled-components';

import { Row, Col } from './grid';
import {
  black,
  white,
  primaryLightColor,
  primaryDarkColor,
  defaultFontSize
} from '../assets/styleConstants';
import BottomMargin from './common/BottomMargin';
import backgroundImg from '../assets/img/nat-4.jpg';

const Features = () => {
  const Section = styled.div`
    padding: 20rem 0;
    background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 100, 131, 0.8)),
      url(${backgroundImg});
    background-size: cover;
    margin-top: -10rem;

    transform: skewY(-7deg);

    & > * {
      transform: skewY(7deg);
    }
  `

  const FeatureBox = styled.div`
    background-color: rgba(${white}, .8);
    font-size: 1.5rem;
    padding: 2.5rem;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(${black}, .15);
    transition: transform .3s;


    &:hover {
      transform: translateY(-1.5rem);
    }

  `

  const Icon = styled.i`
    font-size: 6rem;
    display: inline-block;
    background-image: linear-gradient(to right, rgb(${primaryLightColor}), rgb(${primaryDarkColor}));
    -webkit-background-clip: text;
    color: transparent;
  `

  const Header2 = styled.h3`
    font-size: ${defaultFontSize};
    font-weight: 700;
    text-transform: uppercase;
  `

  return (
    <Section>

      <Row>
        <Col ratio={[1,4]}>
          <FeatureBox>
            <Icon className="icon-basic-world"></Icon>
            <Header2>Explore The World</Header2>
            <BottomMargin small />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel interdum tellus.
            Curabitur quis magna at neque mollis sollicitudin sed a felis. Sed vel quam eu sapien feugiat mattis.</p>
          </FeatureBox>
        </Col>
        <Col ratio={[1,4]}>
          <FeatureBox>
            <Icon className="icon-basic-compass"></Icon>
            <Header2>Meet Nature</Header2>
            <BottomMargin small />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel interdum tellus.
            Curabitur quis magna at neque mollis sollicitudin sed a felis. Sed vel quam eu sapien feugiat mattis.</p>
          </FeatureBox>
        </Col>
        <Col ratio={[1,4]}>
          <FeatureBox>
            <Icon className="icon-basic-map"></Icon>
            <Header2>Find Your Way</Header2>
            <BottomMargin small />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel interdum tellus.
            Curabitur quis magna at neque mollis sollicitudin sed a felis. Sed vel quam eu sapien feugiat mattis.</p>
          </FeatureBox>
        </Col>
        <Col ratio={[1,4]}>
          <FeatureBox>
            <Icon className="icon-basic-heart"></Icon>
            <Header2>Live A Healthier Life</Header2>
            <BottomMargin small />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel interdum tellus.
            Curabitur quis magna at neque mollis sollicitudin sed a felis. Sed vel quam eu sapien feugiat mattis.</p>
          </FeatureBox>
        </Col>
      </Row>
    </Section>
  )
}

export default Features;
