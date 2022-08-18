import React from 'react'

import App from '../App'
import '../i18n'

const Template = args => <App {...args} />

export const NotFound = Template.bind({})
NotFound.args = {}

export const Classes = Template.bind({})
Classes.args = {
  dataType: 'classes',
}

export default {
  title: 'Widgets',
  component: App,
}
