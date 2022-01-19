import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const ExploreCardSkeleton = () => {
  return (
    <Stack>
      <Skeleton
        style={{ height: '100%', width: '100%' }}
        variant="rectangular"
      />
    </Stack>
  );
};

export default ExploreCardSkeleton;
