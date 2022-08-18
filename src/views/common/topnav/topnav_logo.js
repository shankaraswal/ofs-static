import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    },
  },
}));

export default function TopnavLogo(){
  const classes = useStyles();
  return (
        <Typography variant="h6" className={classes.title }>
          Logo
        </Typography>

  );
}

