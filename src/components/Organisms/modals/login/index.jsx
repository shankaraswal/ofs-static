import React, { useCallback, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Icon,
  IconButton,
  InputAdornment,
  Link,
  SvgIcon,
  TextField,
  Typography,
} from '@material-ui/core'
import { Close as CloseIcon, MailOutlined as MailIcon } from '@material-ui/icons'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import Dialog from '_components/Atoms/dialog'
import Button from '_components/Atoms/Buttons/button'
import PasswordIcon from '_assets/svgs/ic-password.svg'
import { emailExpression } from '_utils/string'
import ModalContext from '_components/Organisms/modals/context'

import { MODAL_TYPES } from '../constants'

import useStyles from './styles'

const LoginModal = ({ open, onClose }) => {
  const styles = useStyles()
  const { t } = useTranslation(['login'])

  const context = useContext(ModalContext)
  const [loading, setLoading] = useState(false)

  const { errors, control, handleSubmit } = useForm()

  const onSubmit = useCallback(data => {
    setLoading(true)
    // TODO: implement submit action
  }, [])

  const onClickSignUp = useCallback(() => {
    context.setModalType(MODAL_TYPES.SIGN_UP)
  }, [context])

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ root: styles.dialogRoot, paperScrollPaper: styles.dialogContainer }}
    >
      <Grid wrap="nowrap" container direction="column" className={styles.logIn}>
        <DialogTitle disableTypography className={styles.dialogTitle}>
          <Typography component="h1" className={styles.title}>
            {t('title')}
          </Typography>
          <Typography component="p" className={styles.subtitle}>
            {t('subtitle')}
          </Typography>
        </DialogTitle>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <DialogContent className={styles.dialogContent}>
            <Grid container direction="column">
              <Controller
                name="email"
                defaultValue=""
                rules={{ required: true, pattern: emailExpression }}
                control={control}
                as={TextField}
                className={styles.textField}
                label={t('emailField')}
                type="email"
                variant="outlined"
                error={!!errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <Icon>
                        <MailIcon />
                      </Icon>
                    </InputAdornment>
                  ),
                }}
              />
              <Controller
                name="password"
                defaultValue=""
                rules={{ required: true }}
                control={control}
                as={TextField}
                className={styles.textField}
                label={t('passwordField')}
                type="password"
                variant="outlined"
                error={!!errors.password}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <SvgIcon viewBox={PasswordIcon.viewBox}>
                        <use xlinkHref={`#${PasswordIcon.id}`} />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </DialogContent>
          <DialogActions className={styles.dialogActions} disableSpacing>
            <Box mt={2.5} mb={4} mx={0}>
              <Button variant="contained" type="submit" isLoading={loading}>
                {t('buttonLogin')}
              </Button>
            </Box>
            <Link component="button" href="/" className={styles.link}>
              {t('forgotPassword')}
            </Link>
            <Link component="button" href="/" className={classnames(styles.link, styles.bold)}>
              {t('helpSigningIn')}
            </Link>
            <IconButton className={styles.closeButton} onClick={onClose}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </DialogActions>
        </form>
      </Grid>
      <Grid wrap="nowrap" container direction="column" className={styles.signUp}>
        <Typography component="h1" className={styles.title}>
          {t('createAccount')}
        </Typography>
        <Typography component="p" className={styles.subtitle}>
          {t('createAccountDescription')}
        </Typography>
        <Box mt={3}>
          <Button variant="contained" onClick={onClickSignUp}>
            {t('buttonSignUp')}
          </Button>
        </Box>
      </Grid>
    </Dialog>
  )
}

LoginModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

LoginModal.defaultProps = {
  open: true,
  onClose: () => {},
}

export default React.memo(LoginModal)
