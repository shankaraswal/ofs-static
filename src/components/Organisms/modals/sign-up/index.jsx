/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useContext, useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
} from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import Dialog from '_components/Atoms/dialog'
import ModalContext from '_components/Organisms/modals/context'
import Button from '_components/Atoms/Buttons/button'
import FormField from '_components/Atoms/form-field'

import { MODAL_TYPES } from '../constants'
import formStructure from '../signup-register-fields.json'

import useStyles from './styles'

const SignUpModal = ({ open, onClose }) => {
  const { t } = useTranslation(['common', 'signUp'])
  const [visiblePassword, setVisiblePassword] = useState(false)
  const styles = useStyles()
  const context = useContext(ModalContext)
  const { control, errors, handleSubmit } = useForm()

  const togglePasswordVisibility = useCallback(() => {
    setVisiblePassword(prev => !prev)
  }, [])

  const onClickSignIn = useCallback(() => {
    context.setModalType(MODAL_TYPES.LOGIN)
  }, [context])

  const onSubmit = useCallback(
    data => {
      context.setModalType(MODAL_TYPES.TERMS)
    },
    [context]
  )

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ root: styles.dialogRoot, paperScrollPaper: styles.dialogContainer }}
    >
      <Grid wrap="nowrap" container direction="column">
        <DialogTitle className={styles.dialogTitle}>
          <Typography className={styles.title}>{t('signUp:title')}</Typography>
          <Typography className={styles.subtitle}>{t('signUp:subtitle')}</Typography>
        </DialogTitle>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Divider variant="fullWidth" />
          <DialogContent className={styles.dialogContent}>
            {formStructure.data.primaryInfo.map(item => (
              <FormField
                key={item.fieldName}
                control={control}
                errors={errors}
                item={item}
                visiblePassword={visiblePassword}
                togglePasswordVisibility={togglePasswordVisibility}
              />
            ))}
          </DialogContent>
          <DialogActions className={styles.dialogActions}>
            <Button variant="contained" type="submit">
              {t('common:next')}
            </Button>
            <Link component="button" className={styles.link} onClick={onClickSignIn}>
              {t('signUp:haveAccount')}{' '}
              <Typography component="span" className={classnames(styles.link, styles.bold)}>
                {t('signUp:buttonSignIn')}
              </Typography>
            </Link>

            <IconButton className={styles.closeButton} onClick={onClose}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </DialogActions>
        </form>
      </Grid>
    </Dialog>
  )
}

SignUpModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

SignUpModal.defaultProps = {
  open: true,
  onClose: () => {},
}

export default React.memo(SignUpModal)
