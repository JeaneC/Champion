import React from 'react';
import styled from 'styled-components';
import { gridWith, gutterVertical } from '../../assets/styleConstants';

const Row = (props) => {
  const Wrapper = styled.div`
    max-width: ${gridWith};
    margin: 0 auto;

    &:not(:last-child) {
      margin-bottom: ${gutterVertical};
    }

    &::after {
      content: "";
      display: table;
      clear: both;
    }
  `

  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export default Row;
