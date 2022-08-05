/* eslint-disable radix */
import React from 'react';
import { Grid, TextField } from '@mui/material';

const RenderNumber = (props) => {
  const {
    label,
    variant,
    disabled,
    id,
    error,
    field,
    helperText,
  } = props;

  const { value: origin } = field;

  const disabledLetterE = (event) => (event.which === 69 || event.which === 190) && event.preventDefault();

  const handleChange = (e) => {
    const { value } = e.target;
    if (Number.isNaN(value)) {
      field.onChange('0.0');
      return;
    }
    field.onChange(value);
  };

  return (
    <Grid>
      <TextField
        id={id}
        error={error}
        name={field.name}
        helperText={error ? helperText : ''}
        type="number"
        variant={variant}
        label={label}
        disabled={disabled}
        sx={{
          width: '250px',
          '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            display: 'none',
          },
          '& input': {
            'MozAppearance': 'textfield',
          },
        }}
        onBlur={field.onBlur}
        onKeyDown={(e) => disabledLetterE(e)}
        value={origin || ''}
        onChange={(e) => handleChange(e)}
        InputProps={{
          style: { fontSize: '0.90rem' },
        }} />
    </Grid>
  );
};

RenderNumber.defaultProps = {
  disabled: false,
  helperText: '',
  error: false,
  field: {
    value: null,
  },
};

export default RenderNumber;
