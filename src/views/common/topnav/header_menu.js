import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import "./header.scss";


const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(0)
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    //justifyContent: "space-evenly"
    marginLeft: theme.spacing(10),
  },
  topnavLinks: {
    color: '#ff0000 !important',
  },
}));

const HeaderMenu = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Classes",
      pageURL: "/"
    },
    {
      menuTitle: "Packages",
      pageURL: "/"
    },
    {
      menuTitle: "Privates",
      pageURL: "/"
    },
    {
      menuTitle: "Workshops",
      pageURL: "/"
    },
    {
      menuTitle: "Gift cards",
      pageURL: "/"
    }
  ];
  return (
    <React.Fragment>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              {menuItems.map(menuItem => {
                const { menuTitle, pageURL } = menuItem;
                return (
                  <MenuItem onClick={() => handleMenuClick(pageURL)}>
                    {menuTitle}
                  </MenuItem>
                );
              })}
            </Menu>
          </>
        ) : (
          <div className={classes.headerOptions}>
            <Button
              color="secondary"
              variant="text"
              className="topnavLinks is-active"
              onClick={() => handleButtonClick("/")}
            >
              Classes
            </Button>
            <Button
              color="secondary"
              variant="text"
              className="topnavLinks"
              onClick={() => handleButtonClick("/")}
            >
              Packages
            </Button>
            <Button
              color="secondary"
              variant="text"
              className="topnavLinks"
              onClick={() => handleButtonClick("/")}
            >
              Privates
            </Button>
            <Button
              color="secondary"
              variant="text"
              className="topnavLinks"
              onClick={() => handleButtonClick("/")}
            >
              Workshops
            </Button>
            <Button
              color="secondary"
              variant="text"
              className="topnavLinks"
              onClick={() => handleButtonClick("/")}
            >
              Gift cards
            </Button>
          </div>
        )}
    </React.Fragment>
  );
}

HeaderMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

//export default (Header);

export default withRouter(HeaderMenu);