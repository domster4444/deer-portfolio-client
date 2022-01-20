/* eslint-disable operator-linebreak */
import React, { useState, useEffect } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'library/common/components/stateSlices/loginSlice';
import { setAuthOLogoutState } from 'features/AuthOLoggedInUser/AuthOStateSlice';
import constant from 'constant';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AccountMenuSkeleton from './AccountMenuSkeleton';

export default function AccountMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutSubmitHandler = () => {
    window.open(`${constant.serverURL}/auth/logout`, '_self');
    dispatch(setAuthOLogoutState());
    // @ts-ignore: Unreachable code error
    dispatch(logout());
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };

  const { allUserData } = useSelector(
    (state: RootStateOrAny) => state.allUserDataState
  );

  console.log('allUserData in account.tsx test::', allUserData);
  // const accountDatas = allUserData.allUserData;
  // console.log(accountDatas);

  // const { url } = accountDatas;

  const [url, setUrl] = useState('');
  const [name, setName] = useState('Profile');
  useEffect(() => {
    if (allUserData === null) {
      setUrl(
        'https://i.pinimg.com/564x/74/46/9b/74469bd23df16c22231fcf75b7073fd2.jpg'
      );
    } else {
      setUrl(allUserData.allUserData.url);
      setName(
        `${allUserData.allUserData.firstName.toUpperCase()} 
          
        ${allUserData.allUserData.lastName.toUpperCase()}`
      );
    }
  }, [allUserData]);

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
        style={{ position: 'absolute', right: '1rem' }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            {(() => {
              if (isLoaded === true) {
                return (
                  <Avatar
                    alt="profile picture"
                    src={url}
                    sx={{ width: 50, height: 50 }}
                  >
                    M
                  </Avatar>
                );
              }
              return <AccountMenuSkeleton />;
            })()}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem style={{ fontSize: '1.4rem' }}>
          <Avatar alt="profile picture" src={url} />
          {name}
        </MenuItem>
        <MenuItem style={{ fontSize: '1.4rem' }}>
          <Avatar alt="profile picture" src={url} />
          My account
        </MenuItem>
        <Divider />
        <MenuItem style={{ fontSize: '1.4rem' }}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem style={{ fontSize: '1.4rem' }}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={logoutSubmitHandler} style={{ fontSize: '1.4rem' }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
