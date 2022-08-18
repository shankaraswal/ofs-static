import React from 'react'
import { Card, Grid, IconButton, Link, List, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'
import { Link as RouterLink } from '@reach/router'
import { KeyboardArrowDownOutlined } from '@material-ui/icons'

import Button, { BUTTON_THEME } from '_components/Atoms/Buttons/button'

import useStyles from './styles'

const mockClasses = [
  {
    title: 'Massage',
    cost: '$100.00 or 1 valid credit',
    duration: '0min',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. ',
  },
  {
    title: 'Private training',
    cost: '$100.00 or 1 valid credit',
    duration: '0min',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. ',
  },
  {
    title: 'Private training (60min)',
    cost: '$100.00 or 1 valid credit',
    duration: '0min',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. ',
  },
]

const mockUser = {
  name: 'Cecília Pozo',
}

const SessionsList = () => {
  const { t } = useTranslation(['privates'])
  const classes = mockClasses // TODO: use useSelector when integrate
  const user = mockUser // TODO: use useSelector when integrate
  const styles = useStyles()

  return (
    <Grid>
      {user ? (
        <Grid>
          <Typography component="span" className={styles.text}>
            {t('loggedIn')}
          </Typography>
          <Typography component="span" className={classnames(styles.text, styles.link)}>
            {user.name}{' '}
            <IconButton>
              <KeyboardArrowDownOutlined color="primary" />
            </IconButton>
          </Typography>
        </Grid>
      ) : (
        <Grid>
          <Link component={RouterLink} to="/" className={classnames(styles.text, styles.link)}>
            {t('loginButton')}
          </Link>
          <Typography component="span" className={styles.text}>
            {t('loginText')}
          </Typography>
          <Typography component="p" className={styles.description}>
            {t('description')}
          </Typography>
        </Grid>
      )}
      <List>
        {classes.map(item => (
          <Card key={item.title} className={styles.card}>
            <Typography className={styles.cardTitle}>{item.title}</Typography>
            <Typography className={styles.cardInfo}>
              {item.cost} • {item.duration}
            </Typography>
            <Typography className={styles.cardDescription}>{item.description}</Typography>
            <Button theme={BUTTON_THEME.OUTLINED} className={styles.cardButton}>
              {t('bookButton')}
            </Button>
          </Card>
        ))}
      </List>
    </Grid>
  )
}

SessionsList.propTypes = {}

SessionsList.defaultProps = {}

export default React.memo(SessionsList)
