import React from 'react';
// mui
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const AccountMenuSkeleton = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="circular" width={50} height={50} />
    </Stack>
  );
};

export default AccountMenuSkeleton;
