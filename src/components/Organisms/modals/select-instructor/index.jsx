/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useContext, useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {
  Avatar,
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
import { ArrowBackIos } from '@material-ui/icons'

import Button from '_components/Atoms/Buttons/button'
import { MODAL_TYPES } from '_components/Organisms/modals/constants'
import ModalContext from '_components/Organisms/modals/context'
import Dialog from '_components/Atoms/dialog'

import useStyles from './styles'

const mockedList = List([
  {
    id: '1',
    name: 'Alex Walker',
    thumbnail: 'https://randomuser.me/api/portraits/men/57.jpg',
  },
  {
    id: '2',
    name: 'Gaspar Antunes',
    thumbnail: 'https://randomuser.me/api/portraits/men/58.jpg',
  },
  {
    id: '3',
    name: 'Kin Chang-Min',
    thumbnail: 'https://randomuser.me/api/portraits/men/59.jpg',
  },
  {
    id: '4',
    name: 'Prescott MacCaffery',
    thumbnail: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
  {
    id: '5',
    name: 'John Doe',
    thumbnail: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
])

const SelectInstructorModal = ({ open, onClose }) => {
  const context = useContext(ModalContext)

  const { t } = useTranslation(['common', 'privates'])
  const styles = useStyles()

  const [selected, setSelected] = useState()

  const handleSelect = useCallback(event => {
    setSelected(event.target.value)
  }, [])

  const onClickBack = useCallback(() => {
    context.setModalType(MODAL_TYPES.SESSION_TYPE)
  }, [context])

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ root: styles.dialogRoot, paperScrollPaper: styles.dialogContainer }}
    >
      <Grid wrap="nowrap" container direction="column">
        <DialogActions className={styles.topActions}>
          <Link className={styles.actionButton} href="#" onClick={onClickBack} color="primary">
            <ArrowBackIos className={styles.icon} />
            {t('privates:instructor.backAction')}
          </Link>
          <Link className={styles.actionButton} href="#" onClick={onClose} color="primary">
            {t('common:cancel')}
          </Link>
        </DialogActions>
        <Divider variant="fullWidth" />
        <Grid className={styles.dialogTitle}>
          <Typography className={styles.subtitle}>2 {t('common:stepOf')} 4</Typography>
          <Typography className={styles.title}>{t('privates:instructor.titleSelect')}</Typography>
        </Grid>
        <DialogContent className={styles.dialogContent}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="session type"
              name="instructor"
              value={selected}
              onChange={handleSelect}
            >
              <FormControlLabel
                className={classnames(styles.formControlLabel, {
                  [styles.checked]: selected === '0',
                })}
                key="0"
                value="0"
                control={<Radio className={styles.radioButton} color="primary" />}
                label={
                  <Grid>
                    <Typography
                      className={classnames(styles.itemTitle, {
                        [styles.itemTitleSelected]: selected === '0',
                      })}
                    >
                      Any available
                    </Typography>
                  </Grid>
                }
              />
              <Typography className={styles.listTitle}>
                {t('privates:instructor.listTitle')}
              </Typography>

              {mockedList.map(item => (
                <FormControlLabel
                  className={classnames(styles.formControlLabel, {
                    [styles.checked]: selected === item.id,
                  })}
                  key={item.id}
                  value={item.id}
                  control={<Radio className={styles.radioButton} color="primary" />}
                  label={
                    <Grid container direction="row" alignItems="center">
                      <Avatar
                        alt={item.name}
                        src={item.thumbnail}
                        className={styles.itemThumbnail}
                      />
                      <Typography
                        className={classnames(styles.itemTitle, {
                          [styles.itemTitleSelected]: selected === item.id,
                        })}
                      >
                        {item.name}
                      </Typography>
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

SelectInstructorModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

SelectInstructorModal.defaultProps = {
  open: true,
  onClose: () => {},
}

export default React.memo(SelectInstructorModal)
