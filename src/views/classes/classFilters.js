import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Avatar, Checkbox, Grid, List, ListItem, ListItemAvatar, ListItemText, ListItemIcon, TextField, InputAdornment  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './classes.scss';
//import themeColors from '../../assets/theme/foundation/color';

//const preventDefault = (event) => event.preventDefault();
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    //color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme) => ({
  ListItemAvatar: {
    width: '32px',
    height: '32px'
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(3, 2),
  },
}))(MuiDialogActions);

export default function ClassFiltersDialog() {
  const classes = useStyles();
  const [openFilter, setOpenFilter] = React.useState(false);
  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const [checked, setChecked] = React.useState([1]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <>
      {/* Class Filters Dialog Modal */}
        <DialogTitle id="class-filters" onClose={handleCloseFilter}>
          Multiple booking
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={3}>
            <Grid item xs={12} >
              <Typography>Class time</Typography>
            </Grid>
            <Grid container direction="row" justify="space-around" alignItems="center" spacing={1}>
              <Grid item xs={4} spacing={3}>
                <Button variant="contained" color="secondary" fullWidth >
                <Typography variant="body1">Morning</Typography>
                <Typography variant="caption">6am to 12pm</Typography>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button variant="outlined" color="default" fullWidth >
                <Typography variant="body1">Noon</Typography>
                <Typography variant="caption">12pm to 3pm</Typography>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button variant="outlined" color="default" fullWidth >
                <Typography variant="body1">Afternoon</Typography>
                <Typography variant="caption">3pm to 9pm</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} >
            <Typography>Search</Typography>
            <form noValidate autoComplete="off">
              <TextField id="search-client" fullWidth placeholder="TextField" variant="outlined" InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}></TextField>
            </form>
            </Grid>
          </Grid>
          <List>
            {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                <ListItem key={value}>
                    <ListItemIcon>
                    <Checkbox
                        edge="start"
                        onChange={handleToggle(value)}
                        checked={checked.indexOf(value) !== -1}
                        inputProps={{ 'aria-labelledby': labelId }}
                        color="secondary"
                    />
                    </ListItemIcon>
                    <ListItemAvatar>
                    <Avatar className={classes.ListItemAvatar}
                        alt={`Avatar n°${value + 1}`}
                        src={`/static/images/avatar/${value + 1}.jpg`}
                    />
                    </ListItemAvatar>
                    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                </ListItem>
                );
            })}
          </List>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Button variant="outlined" onClick={handleCloseFilter} color="primary" fullWidth>
                Clear
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={handleCloseFilter} color="primary" fullWidth>
                Apply filters
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
    </>
  );
}