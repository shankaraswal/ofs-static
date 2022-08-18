import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import PhoneInput from 'material-ui-phone-number'
import { Controller } from 'react-hook-form'
import { IconButton, TextField } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { emailExpression } from '_utils/string'
export const FORM_FIELD_TYPES = {
  ALPHA_TEXT: 'alphaText',
  EMAIL: 'email',
  PHONE: 'phone',
  PASSWORD: 'password',
}

const FormField = ({ control, errors, item, visiblePassword, togglePasswordVisibility }) => {
  const otherProps = useMemo(
    () => ({
      [FORM_FIELD_TYPES.ALPHA_TEXT]: {
        rules: { required: item.required },
      },
      [FORM_FIELD_TYPES.EMAIL]: {
        rules: { required: item.required, pattern: emailExpression },
      },
      [FORM_FIELD_TYPES.PHONE]: {
        defaultCountry: 'us',
        variant: 'outlined',
        rules: { required: item.required },
        as: PhoneInput,
      },
      [FORM_FIELD_TYPES.PASSWORD]: {
        rules: { required: item.required },
        type: visiblePassword ? 'text' : 'password',
        InputProps: {
          endAdornment: (
            <IconButton onClick={togglePasswordVisibility}>
              {visiblePassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        },
      },
    }),
    [item.required, togglePasswordVisibility, visiblePassword]
  )

  return (
    <Controller
      name={item.fieldName}
      className={item.fieldName}
      defaultValue={item.fieldValue}
      control={control}
      as={TextField}
      label={item.fieldLabel}
      variant="outlined"
      error={!!errors[item.fieldName]}
      {...otherProps[item.fieldType]}
    />
  )
}

FormField.propTypes = {
  item: PropTypes.shape({
    fieldName: PropTypes.string,
    fieldLabel: PropTypes.string,
    fieldType: PropTypes.string,
    required: PropTypes.bool,
    fieldValue: PropTypes.string,
  }).isRequired,
  visiblePassword: PropTypes.bool,
  control: PropTypes.shape.isRequired,
  errors: PropTypes.shape,
  togglePasswordVisibility: PropTypes.func,
}

FormField.defaultProps = {
  errors: {},
  visiblePassword: false,
  togglePasswordVisibility: () => {},
}

export default React.memo(FormField)
