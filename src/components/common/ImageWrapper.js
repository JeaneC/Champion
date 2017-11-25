import React from 'react';
import styled from 'styled-components';

import { black, primaryColor } from '../../assets/styleConstants';

const Image = ({src, top = null, bottom = null, left = null, right = null}) => {

  const Image = styled.img`
    z-index: 1;
    width: 55%;
    box-shadow: 0 1.5rem 4rem rgba(${black}, .4);
    position: absolute;
    outline-offset: 2rem;


    top: ${top != null ? top: "unset"};
    bottom: ${bottom != null ? bottom : "unset"};
    left: ${left != null ? left : "unset"};
    right: ${right != null ? right : "unset"};

    &:hover {
      outline: 1.5rem solid rgb(${primaryColor});
      transform: scale(1.05) translateY(-.5rem);
      box-shadow: 0 2.5rem 4rem rgba(${black}, .5);
      z-index: 2;
    }

    &:not(:hover) {
      transform: scale(.9);
    }
  `

  return (
    <Image src={src} />
  )
}

export default Image
