/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import PhoneInput from 'material-ui-phone-number'
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  SvgIcon,
  TextField,
  Typography,
} from '@material-ui/core'
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns'
import { Close as CloseIcon } from '@material-ui/icons'
import { LocalizationProvider, DatePicker } from '@material-ui/pickers'
import { Controller, useForm } from 'react-hook-form'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useTranslation } from 'react-i18next'

import Dialog from '_components/Atoms/dialog'
import CalendarIcon from '_assets/svgs/ic-calendar.svg'
import Button from '_components/Atoms/Buttons/button'

import useStyles from './styles'

const FIELDS = {
  PHONE_NUMBER: 'phoneNumber',
  BIRTH_DATE: 'birthDate',
  FIRST_NAME: 'firstName',
  EMERGENCY_NAME: 'emergencyContactName',
  ADDRESS: 'address',
  UNIT: 'unit',
  STREET_NUMBER: 'streetNumber',
  STREET_NAME: 'streetName',
  CITY: 'city',
  STATE: 'state',
  COUNTRY: 'country',
  POSTAL_CODE: 'postalCode',
}

const AdditionalInfoModal = ({ open, onClose }) => {
  // TODO: Integrate user
  const user = {
    name: 'Cecilia',
  }
  const { t } = useTranslation(['common', 'signUp', 'additionalInfo'])
  const styles = useStyles()
  const [selectedDate, handleDateChange] = useState(null)
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState(null)

  // TODO: Integrate list
  const addressesList = [
    {
      id: 1,
      unit: '',
      streetName: 'Kingsley Lane',
      streetNumber: 20,
      city: 'Byron Bay',
      state: 'NSW',
      country: 'Australia',
      postalCode: '3181',
    },
    {
      id: 2,
      unit: '',
      streetName: 'Kingsley Lane',
      streetNumber: 31,
      city: 'Byron Bay',
      state: 'NSW',
      country: 'Australia',
      postalCode: '3181',
    },
    {
      id: 3,
      unit: '',
      streetName: 'Kingsley Lane',
      streetNumber: 42,
      city: 'Byron Bay',
      state: 'NSW',
      country: 'Australia',
      postalCode: '3181',
    },
  ]
  const { control, handleSubmit } = useForm()

  const renderDatePickerInput = useCallback(
    props => <TextField variant="outlined" {...props} helperText="" />,
    []
  )

  const renderAddressOption = useCallback(
    option => (
      <Grid>
        <Typography
          className={styles.optionTitle}
        >{`${option.streetNumber} ${option.streetName}`}</Typography>
        <Typography
          className={styles.optionSubtitle}
        >{`${option.city} ${option.state}, ${option.country}`}</Typography>
      </Grid>
    ),
    [styles]
  )

  const onSubmit = useCallback(
    data => {
      // TODO: Integrate
      // eslint-disable-next-line no-unused-vars
      const payload = {
        ...data,
        [FIELDS.BIRTH_DATE]: selectedDate,
        [FIELDS.PHONE_NUMBER]: phone,
      }
    },
    [phone, selectedDate]
  )

  const handleAddressChange = useCallback((_, value) => {
    setAddress(value)
  }, [])

  const renderInputAddress = useCallback(
    params => <TextField {...params} label={t('additionalInfo:addressField')} variant="outlined" />,
    [t]
  )

  const getOptionsLabelAddress = useCallback(
    option =>
      `${option.streetNumber} ${option.streetName}, ${option.city} ${option.state}, ${option.country}`,
    []
  )

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ root: styles.dialogRoot, paperScrollPaper: styles.dialogContainer }}
    >
      <Grid
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        wrap="nowrap"
        container
        direction="column"
      >
        <DialogTitle className={styles.dialogTitle}>
          <Typography className={styles.title}>
            {t('additionalInfo:title')}
            {user.name}
          </Typography>
          <Typography className={styles.subtitle}>{t('additionalInfo:subtitle')}</Typography>
        </DialogTitle>
        <Divider variant="fullWidth" />
        <DialogContent className={styles.dialogContent}>
          <Typography className={styles.sectionTitle}>
            {t('additionalInfo:birthdayTitle')}
          </Typography>
          <LocalizationProvider dateAdapter={DateFnsAdapter}>
            <DatePicker
              disableToolbar
              variant="inline"
              format="dd MMMM yyyy"
              margin="normal"
              id="birth-date"
              label={t('additionalInfo:birthField')}
              value={selectedDate}
              inputFormat=" "
              onChange={handleDateChange}
              renderInput={renderDatePickerInput}
              keyboardIcon={
                <SvgIcon viewBox={CalendarIcon.viewBox} className={styles.datePickerIcon}>
                  <use xlinkHref={`#${CalendarIcon.id}`} />
                </SvgIcon>
              }
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </LocalizationProvider>

          <Controller
            name={FIELDS.FIRST_NAME}
            className={styles.firstName}
            defaultValue=""
            rules={{ required: true }}
            control={control}
            as={TextField}
            label={t('signUp:firstNameField')}
            type="text"
            variant="outlined"
          />
          <Typography className={styles.sectionTitle}>
            {t('additionalInfo:addressTitle')}
          </Typography>
          <Autocomplete
            value={address}
            onChange={handleAddressChange}
            selectOnFocus
            clearOnBlur
            options={addressesList}
            renderOption={renderAddressOption}
            handleHomeEndKeys
            fullWidth
            id="address-autocomplete"
            freeSolo
            closeIcon={false}
            renderInput={renderInputAddress}
            getOptionLabel={getOptionsLabelAddress}
          />
          {address && (
            <Grid className={styles.addressDetail}>
              <Controller
                as={TextField}
                defaultValue={address.unit}
                className={styles.addressUnit}
                variant="outlined"
                control={control}
                name={FIELDS.UNIT}
                label="Unit"
              />
              <Controller
                as={TextField}
                defaultValue={address.streetNumber}
                className={styles.addressStreetNumber}
                variant="outlined"
                control={control}
                label="Street number"
                name={FIELDS.STREET_NUMBER}
              />
              <Controller
                as={TextField}
                defaultValue={address.streetName}
                className={styles.addressStreetName}
                variant="outlined"
                control={control}
                label="Street name"
                name={FIELDS.STREET_NAME}
              />
              <Controller
                as={TextField}
                defaultValue={address.city}
                className={styles.addressCity}
                variant="outlined"
                control={control}
                label="City"
                name={FIELDS.CITY}
              />
              <Controller
                as={TextField}
                defaultValue={address.state}
                className={styles.addressState}
                variant="outlined"
                control={control}
                label="State"
                name={FIELDS.STATE}
              />
              <Controller
                as={TextField}
                defaultValue={address.country}
                className={styles.addressCountry}
                variant="outlined"
                control={control}
                label="Country"
                name={FIELDS.COUNTRY}
              />
              <Controller
                as={TextField}
                defaultValue={address.postalCode}
                control={control}
                className={styles.addressPostal}
                variant="outlined"
                label="Postal code/Zip"
                name={FIELDS.POSTAL_CODE}
              />
            </Grid>
          )}
          <Typography className={styles.sectionTitle}>
            {t('additionalInfo:emergencyTitle')}
          </Typography>
          <Controller
            name={FIELDS.EMERGENCY_NAME}
            className={styles.Name}
            defaultValue=""
            rules={{ required: true }}
            control={control}
            as={TextField}
            label={t('additionalInfo:emergencyNameField')}
            type="text"
            variant="outlined"
          />
          <PhoneInput
            className={styles.phoneNumber}
            defaultCountry="us"
            value={phone}
            onChange={setPhone}
            label={t('signUp:phoneField')}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <Button variant="contained" type="submit">
            {t('common:saveContinue')}
          </Button>

          <IconButton className={styles.closeButton} onClick={onClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </DialogActions>
      </Grid>
    </Dialog>
  )
}

AdditionalInfoModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

AdditionalInfoModal.defaultProps = {
  open: true,
  onClose: () => {},
}

export default React.memo(AdditionalInfoModal)
