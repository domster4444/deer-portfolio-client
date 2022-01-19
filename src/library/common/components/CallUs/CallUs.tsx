import React from 'react';
import styled from 'styled-components';

const CallButton = styled.a`
  font-size: 2rem;
`;

const CallUs = () => {
  return (
    <CallButton href="tel:+977 9816008152">Call (+977) 9816008152 </CallButton>
  );
};

export default CallUs;
