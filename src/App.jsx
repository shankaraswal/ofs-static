/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider, Grid } from '@material-ui/core'

import { theme } from '_utils/material-ui'
import Modal from '_components/Organisms/modals'
import ModalContext from '_components/Organisms/modals/context'
import Toast from '_components/Atoms/Toast'

import { appActions } from './store/actions/app.actions'
import Classes from './components/Pages/Classes/Classes'
import Workshop from './components/Pages/Workshop/Workshop'
import Header from './components/Molecules/Header/Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.dispatch(appActions.getWidgetSettings(this.props.widgetId))

    this.state = {
      modalType: '',
    }
    this.setModalType = this.setModalType.bind(this)
  }

  setModalType(modalType) {
    this.setState({ modalType })
  }

  getWidgetType = componentType => {
    switch (componentType) {
      case 'classes':
        return (
          <>
            <Header />
            <Classes widgetType={this.props.dataType} />
          </>
        )
      case 'workshop':
        return (
          <>
            <Workshop widgetType={this.props.dataType} />
          </>
        )
      default:
        return <h1>No component to load</h1>
    }
  }

  render() {
    const { widgetSettingData, loading } = this.props.appSetting
    const componentType = this.props.dataType

    if (loading === true) {
      return <p>Loading Component...</p>
    }
    return (
      <Grid className="onefitstop-base">
        <ThemeProvider theme={theme}>
          <Toast />
          <ModalContext.Provider
            value={{ modalType: this.state.modalType, setModalType: this.setModalType }}
          >
            {this.getWidgetType(componentType)}
            <Modal modalType={this.state.modalType} />
          </ModalContext.Provider>
        </ThemeProvider>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  const { appSetting } = state
  return {
    appSetting,
  }
}

export default connect(mapStateToProps)(App)
