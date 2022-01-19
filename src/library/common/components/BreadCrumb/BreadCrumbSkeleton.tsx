import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const BreadCrumbContainer = styled.div`
  display: flex;
  font-size: 1.8rem;
`;

const BreadCrumbSkeleton = () => {
  return (
    <Stack spacing={1}>
      <BreadCrumbContainer>
        <Skeleton
          variant="text"
          style={{ margin: '0rem 0.25rem' }}
          width={80}
          height={50}
        />
        <Skeleton
          variant="text"
          style={{ margin: '0rem 0.25rem' }}
          width={80}
          height={50}
        />
        <Skeleton
          variant="text"
          style={{ margin: '0rem 0.25rem' }}
          width={80}
          height={50}
        />
      </BreadCrumbContainer>
    </Stack>
  );
};

export default BreadCrumbSkeleton;
