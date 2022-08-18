/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {
  DialogActions,
  DialogContent,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Link,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core'
import { List } from 'immutable'
import { useTranslation } from 'react-i18next'

import Dialog from '_components/Atoms/dialog'
import Button from '_components/Atoms/Buttons/button'

import useStyles from './styles'

const mockedList = List([
  {
    id: '1',
    title: 'Massage',
    cost: '$100.00 or 1 valid credit',
    duration: '60min',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. ',
  },
  {
    id: '2',
    title: 'Private training',
    cost: '$100.00 or 1 valid credit',
    duration: '60min',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. ',
  },
  {
    id: '3',
    title: 'Private pilates',
    cost: '$100.00 or 1 valid credit',
    duration: '60min',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. ',
  },
])

const SessionTypeModal = ({ open, onClose }) => {
  const { t } = useTranslation(['common', 'privates'])
  const styles = useStyles()

  const [selected, setSelected] = useState()

  const handleSelect = useCallback(event => {
    setSelected(event.target.value)
  }, [])

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ root: styles.dialogRoot, paperScrollPaper: styles.dialogContainer }}
    >
      <Grid wrap="nowrap" container direction="column">
        <DialogActions className={styles.topActions}>
          <Typography className={styles.actionButton}>
            {t('privates:sessionType.backAction')}
          </Typography>
          <Link className={styles.actionButton} href="#" onClick={onClose} color="primary">
            {t('common:cancel')}
          </Link>
        </DialogActions>
        <Divider variant="fullWidth" />
        <Grid className={styles.dialogTitle}>
          <Typography className={styles.subtitle}>1 {t('common:stepOf')} 4</Typography>
          <Typography className={styles.title}>{t('privates:sessionType.titleSelect')}</Typography>
        </Grid>
        <DialogContent className={styles.dialogContent}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="session type"
              name="sessionType"
              value={selected}
              onChange={handleSelect}
            >
              {mockedList.map(item => (
                <FormControlLabel
                  className={classnames(styles.formControlLabel, {
                    [styles.checked]: selected === item.id,
                  })}
                  key={item.id}
                  value={item.id}
                  control={<Radio className={styles.radioButton} color="primary" />}
                  label={
                    <Grid>
                      <Typography
                        className={classnames(styles.itemTitle, {
                          [styles.itemTitleSelected]: selected === item.id,
                        })}
                      >
                        {item.title}
                      </Typography>
                      <Typography className={styles.itemCost}>
                        {item.cost} • {item.duration}
                      </Typography>
                      <Typography className={styles.itemDescription}>{item.description}</Typography>
                    </Grid>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <Button variant="contained" type="submit" disabled={!selected}>
            {t('common:continue')}
          </Button>
        </DialogActions>
      </Grid>
    </Dialog>
  )
}

SessionTypeModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

SessionTypeModal.defaultProps = {
  open: true,
  onClose: () => {},
}

export default React.memo(SessionTypeModal)
