/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-wrap-multilines */
import * as React from 'react';
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

export default function Form({ firstName, lastName, email, url }: any) {
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

  return (
    <form className="profileForm">
      <div className="profileForm__container">
        <TextField
          label="First Name"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          variant="filled"
          value={firstName}
        />
        <TextField
          label="Last Name"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          variant="filled"
          value={lastName}
        />
        <br />
        <TextField
          label="Email"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          variant="filled"
          value={email}
        />
        <TextField
          label="Contact Number"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          variant="filled"
        />
        <br />
        <TextField
          label="Address"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          variant="filled"
        />
        <TextField
          label="City"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          variant="filled"
        />
        <TextField
          label="Zip Code"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          variant="filled"
        />

        <UnstyledButtonsSimple name="Upload" />
      </div>
    </form>
  );
}
