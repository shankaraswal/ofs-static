import { ThemeProvider } from '@material-ui/styles'
import React from 'react'

import CalendarComponent from '_components/calendar'
import { theme } from '_utils/material-ui'

import '../i18n'
import '../bootstrap'

const Component = args => (
  <ThemeProvider theme={theme}>
    <CalendarComponent {...args} />
  </ThemeProvider>
)
export const Calendar = Component.bind({})
Calendar.args = {}

export default {
  title: 'Components',
  component: Component,
}
