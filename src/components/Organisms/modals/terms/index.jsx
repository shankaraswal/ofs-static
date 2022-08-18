/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useMemo, useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {
  Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  SvgIcon,
  Typography,
} from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import { List } from 'immutable'
import { withStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'

import Dialog from '_components/Atoms/dialog'
import Button from '_components/Atoms/Buttons/button'
import palette from '_utils/palette'
import TermsIcon from '_assets/svgs/ic-terms.svg'

import useStyles from './styles'

const TermsModal = ({ open, onClose }) => {
  const styles = useStyles()
  const { t } = useTranslation(['common', 'terms'])
  const [acceptance, setAcceptance] = useState(
    List([
      { label: 'Custom Policy That Has a Super Large Name', value: false },
      { label: 'Liability Release Policy', value: false },
      { label: 'Custom Policy', value: false },
    ])
  )

  const updateCheckbox = useCallback(
    id => () => {
      setAcceptance(prev => prev.setIn([id, 'value'], !prev.getIn([id, 'value'])))
    },
    []
  )

  const StyledCheckbox = useMemo(
    () =>
      withStyles(() => ({
        root: {
          '&$checked': {
            color: palette.custom['orange-soda'],
          },
        },
        checked: {},
      }))(Checkbox),
    []
  )

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ root: styles.dialogRoot, paperScrollPaper: styles.dialogContainer }}
    >
      <Grid wrap="nowrap" container direction="column">
        <DialogTitle className={styles.dialogTitle}>
          <Typography className={styles.title}>{t('terms:title')}</Typography>
        </DialogTitle>
        <Divider variant="fullWidth" />
        <DialogContent className={styles.dialogContent}>
          <SvgIcon viewBox={TermsIcon.viewBox} className={styles.illustration}>
            <use xlinkHref={`#${TermsIcon.id}`} />
          </SvgIcon>
          <FormControl component="fieldset" className={styles.formControl}>
            <FormGroup>
              {acceptance.map((item, id) => (
                <FormControlLabel
                  key={item.label}
                  className={classnames(styles.formControlLabel, { [styles.checked]: item.value })}
                  control={<StyledCheckbox checked={item.value} onChange={updateCheckbox(id)} />}
                  label={
                    <Typography component="p" className={styles.formControlLabelText}>
                      {`${t('terms:textAgree')} `}
                      <Typography component="span" className={styles.formControlLabelBold}>
                        {item.label}
                      </Typography>
                    </Typography>
                  }
                />
              ))}
            </FormGroup>
          </FormControl>
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <Button
            variant="contained"
            type="submit"
            disabled={!!acceptance.find(item => !item.value)}
          >
            {t('common:next')}
          </Button>

          <IconButton className={styles.closeButton} onClick={onClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </DialogActions>
      </Grid>
    </Dialog>
  )
}

TermsModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

TermsModal.defaultProps = {
  open: true,
  onClose: () => {},
}

export default React.memo(TermsModal)
