import React from 'react';
import './toasts.scss';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="success" className="ofs_alerts success">
        Tellus tincidunt cursus odio est ut.
      </Alert>
      <Alert severity="success" className="ofs_alerts success" onClose={() => {}}>
        Tellus tincidunt cursus odio est ut.
      </Alert>

      <Alert severity="error" className="ofs_alerts error">
        Tellus tincidunt cursus odio est ut.
      </Alert>
      <Alert severity="error" className="ofs_alerts error" onClose={() => {}}>
        Tellus tincidunt cursus odio est ut.
      </Alert>
    </div>
  );
}