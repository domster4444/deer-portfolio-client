/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect } from 'react';
import constant from 'constant';

import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import './Form.css';

// commons
import UnstyledButtonsSimple from 'library/common/components/Buttons/UnstyledButtonsSimple/UnstyledButtonsSimple';

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export default function Form() {
  const [submittedState, setSubmittedState] = React.useState('');
  const [accountFirstName, setFirstName] = React.useState('');
  const [accountLastName, setLastName] = React.useState('');
  const [accountEmail, setEmail] = React.useState('');
  const [accountConstactNumber, setConstactNumber] = React.useState('');
  const [accountAddress, setAddress] = React.useState('');
  const [accountCity, setCity] = React.useState('');
  const [accountZipCode, setZipCode] = React.useState('');

  // --------------------------------
  // --------------------------------
  // --------------------------------
  // --------------------------------
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  // eslint-disable-next-line operator-linebreak
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // _________________________
  // _________________________
  // _________________________

  const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('data submitted');

    const bodyData = {
      firstName: accountFirstName,
      lastName: accountLastName,
      email: accountEmail,
      contactNumber: accountConstactNumber,
      address: accountAddress,
      city: accountCity,
      zipCode: accountZipCode,
    };

    fetch(`${constant.serverURL}/api/users/accountdata`, {
      method: 'PATCH',
      body: JSON.stringify(bodyData),
      credentials: 'include',
      // @ts-ignore
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': true,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(
            '%fetched %cmore %cdata %cfrom %cserver %cof %cuser %cafter %clogin %cfrom %cLocal %cLogin',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;'
          );
          return res.json();
        }
        throw new Error('failed To fetch user data');
      })
      .then((returnedResJsonObj) => {
        console.log(
          'USER PROFILE UPDATED SUCCESSFULLY FROM SERVER RESPONSE , THE REPONSE FROM SERVER IS => ',
          returnedResJsonObj
        );
      })
      .catch((err) => {
        console.log(err);
      });

    setSubmittedState('data submitted');
  };
  // --------------------------------

  useEffect(() => {
    console.log('Form.useEffect allUserData is been fetched again from server');
    // @ts-ignore
    const { email } = JSON.parse(localStorage.getItem('loggedInUser'));

    fetch(`${constant.serverURL}/api/users/accountdata`, {
      method: 'POST',
      body: JSON.stringify({
        email,
      }),
      credentials: 'include',
      // @ts-ignore
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': true,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(
            '%fetched %cmore %cdata %cfrom %cserver %cof %cuser %cafter %clogin %cfrom %cLocal %cLogin',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;',
            'color:white;font-weight:bold;'
          );
          return res.json();
        }
        throw new Error('failed To fetch user data');
      })
      .then((returnedResJsonObj) => {
        console.log(
          'FROM APP.tsx, 🆚all user data after login from local login is:- ',
          returnedResJsonObj
        );
        console.log(
          '®️returnedResJsonObj received after fetching in useEffect ::',
          returnedResJsonObj
        );
        console.log(returnedResJsonObj);
        setFirstName(returnedResJsonObj.allUserData.firstName);
        setLastName(returnedResJsonObj.allUserData.lastName);
        setEmail(returnedResJsonObj.allUserData.email);
        setConstactNumber(returnedResJsonObj.allUserData.contactNumber);
        setAddress(returnedResJsonObj.allUserData.address);
        setCity(returnedResJsonObj.allUserData.city);
        setZipCode(returnedResJsonObj.allUserData.zipCode);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [submittedState]);
  return (
    <form
      className="profileForm"
      onSubmit={(event) => {
        // @ts-ignore
        submitHandler(event);
      }}
    >
      <div className="profileForm__container">
        <TextField
          label="First Name"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          variant="filled"
          value={accountFirstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          variant="filled"
          value={accountLastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <TextField
          label="Email"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          variant="filled"
          value={accountEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Contact Number"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          variant="filled"
          value={accountConstactNumber}
          onChange={(e) => setConstactNumber(e.target.value)}
        />
        <br />
        <TextField
          label="Address"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          variant="filled"
          value={accountAddress}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          label="City"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          variant="filled"
          value={accountCity}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          label="Zip Code"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          variant="filled"
          value={accountZipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />

        <UnstyledButtonsSimple name="Upload" />
      </div>
    </form>
  );
}
