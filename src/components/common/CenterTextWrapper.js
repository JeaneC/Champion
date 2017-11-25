import React from 'react';
import styled from 'styled-components';

const CenterTextWrapper = (props) => {
  const Wrapper = styled.div`
    text-align: center;
  `
  
  return (
   <Wrapper>{props.children}</Wrapper>
  )
}

export default CenterTextWrapper;
