import React from 'react';
import styled from 'styled-components';

const BottomMargin = ({small = false, medium = false, large = false}) => {
  let gap = 0;
  if (small) {
    gap = "1.5rem"
  } else if (medium) {
    gap = "4rem"
  } else {
    gap = "8rem"
  }


  const Space = styled.div`
    margin-bottom: ${gap}
  `

  return (
    <Space />
  )
}


export default BottomMargin;
