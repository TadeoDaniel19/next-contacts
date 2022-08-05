import React from 'react';
import { TextField } from '@mui/material';

const RenderTextField = (props) => {
  const {
    field: {
      value,
      onChange,
      onBlur,
    },
    label,
    helperText,
    style,
    placeholder,
    fullWidth,
    error,
    variant,
    color,
    disabled,
    type,
    id,
    autocomplete,
    required,
    maxLength,
  } = props;

  return (
    <TextField
      error={error}
      required={required}
      disabled={disabled}
      label={label}
      variant={variant}
      color={color}
      helperText={error ? helperText : ''}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      value={value || ''}
      inputProps={{
        style,
        maxLength,
      }}
      fullWidth={fullWidth}
      type={type}
      id={id}
      style={{ width: '100%' }}
      autoComplete={autocomplete} />
  );
}

RenderTextField.defaultProps = {
  error: false,
  required: false,
  disabled: false,
  label: '',
  style: {},
  fullWidth: true,
  placeholder: '',
  helperText: '',
  variant: 'standard',
  color: 'primary',
  type: 'text',
  id: '',
  maxLength: '',
  autocomplete: '',
  field: { name: '', onBlur: () => {}, onChange: () => {}, value: '' },
};

export default RenderTextField;