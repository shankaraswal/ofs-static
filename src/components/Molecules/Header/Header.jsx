/* eslint-disable */
import React, { Component, Fragment } from 'react'
import { Grid } from '@material-ui/core'

import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

class Header extends Component {
  render() {
    return (
      <Fragment>
        <AppBar component="div" color="secondary" position="static" elevation={0}>
          <Grid container>
            <Grid item xs={2}>
              <Tabs value={0} textColor="inherit">
                <Tab textColor="inherit" label="Classes" />
                {/* <Tab textColor="inherit" label="Packages" />
                  <Tab textColor="inherit" label="Privates" />
                  <Tab textColor="inherit" label="Workshops" />
                  <Tab textColor="inherit" label="Gift cards" /> */}
              </Tabs>
            </Grid>
            <Grid item xs={10}></Grid>
          </Grid>
        </AppBar>
      </Fragment>
    )
  }
}

export default Header
