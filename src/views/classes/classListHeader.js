import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, Link, Typography, IconButton, Menu, MenuItem, Button, Dialog, Hidden} from '@material-ui/core';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ClassFiltersDialog from './classFilters';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    //textAlign: 'center',
    //color: theme.palette.text.primary,
    borderRadius: 0,
    flexGrow: 1,
  },
}));

export default function ClassListHeader() {
  const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [openFilter, setOpenFilter] = React.useState(false);
      
    const handleClickOpenFilter = () => {
      setOpenFilter(true);
    };
    const handleCloseFilter = () => {
      setOpenFilter(false);
    };
  return (
    <>
    <div className={classes.root}>
      <Grid container direction="row" >
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={2} borderRadius="0">
            <Grid container spacing={0}>
                <Grid item xs={10} sm={8} md={10} xl={11}>
                <Typography className={classes.root}>
                    <Hidden only="xs">
                        <Link href="#" onClick={preventDefault}>
                            <IconButton aria-label="previous">
                                <ChevronLeftRoundedIcon />
                            </IconButton>
                        </Link>
                    </Hidden>
                    <Typography variant="inherit" color="inherit">
                        Nov 20 - 26, 2020
                    </Typography>
                    <Hidden only="xs">
                      <Link href="#" onClick={preventDefault}>
                          <IconButton aria-label="next">
                              <ChevronRightRoundedIcon />
                          </IconButton>
                      </Link>
                    </Hidden>
                    <Link href="#" onClick={preventDefault}>
                        <IconButton aria-label="next">
                            <DateRangeOutlinedIcon />
                        </IconButton>
                    </Link>

                    {/* <Divider orientation="vertical" /> */}
                    
                    <Link href="#" onClick={handleClickOpenFilter}>
                        <IconButton >
                            <TuneRoundedIcon />
                        </IconButton>
                    </Link>
                </Typography>
                </Grid>
                <Grid item xs={2} sm={4} md={2} xl={1} className="class-listheader" >
                    <Button
                        variant="text"
                        startIcon={<AccountCircleOutlinedIcon />}
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <Hidden only="xs">Login or Register</Hidden>
                        
                    </Button>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <AccountCircleOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                          Dashboard
                        </MenuItem>
                        <MenuItem onClick={handleClose}><ListItemIcon><ExitToAppIcon fontSize="small" /></ListItemIcon>My Packages</MenuItem>
                        <MenuItem onClick={handleClose}>
                        <ListItemIcon><ExitToAppIcon fontSize="small" /></ListItemIcon>Log out</MenuItem>
                    </Menu>
                </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      
    {/* Class Details Dialog Modal */}
    <Dialog onClose={handleCloseFilter} aria-labelledby="class-filters" open={openFilter}>
        <ClassFiltersDialog />
      </Dialog>
    </div>
    </>
  );
}