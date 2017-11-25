import React from 'react';
import styled from 'styled-components';
import { gutterHorizontal } from '../../assets/styleConstants';

const Col = ({ children, ratio } = [1,1]) => {
  //The calculation of the width below factors in a small gap of 2rem that exists in between columns
  //ratio[1] represents the number of total columns
  //ratio[0] represents how wide a column spans in relation to ratio[1]

  const Wrapper = styled.div`
    width: calc(${ratio[0]} * ((100% - ${ratio[1]} * ${gutterHorizontal}) / ${ratio[1]})  + ((${ratio[0]} - 1) * ${gutterHorizontal}) );
    float: left;

    &:not(:last-child) {
      margin-right: ${gutterHorizontal};
    }
  `

  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Col;
