import React from 'react'
import { ThemeProvider } from '@material-ui/styles'

import { MODAL_TYPES } from '_components/Organisms/modals/constants'
import Modal from '_components/Organisms/modals'
import { theme } from '_utils/material-ui'
import '../i18n'
import '../bootstrap'
import Toast from '_components/Atoms/Toast'

const LoginModalComponent = args => {
  return (
    <ThemeProvider theme={theme}>
      <Toast />
      <Modal {...args} />
    </ThemeProvider>
  )
}
export const Login = LoginModalComponent.bind({})
Login.args = {
  modalType: MODAL_TYPES.LOGIN,
}

export const SignUp = LoginModalComponent.bind({})
SignUp.args = {
  modalType: MODAL_TYPES.SIGN_UP,
}

export const Terms = LoginModalComponent.bind({})
Terms.args = {
  modalType: MODAL_TYPES.TERMS,
}
export const AdditionalInfo = LoginModalComponent.bind({})
AdditionalInfo.args = {
  modalType: MODAL_TYPES.ADDITIONAL_INFO,
}

export const SessionType = LoginModalComponent.bind({})
SessionType.args = {
  modalType: MODAL_TYPES.SESSION_TYPE,
}

export const SelectInstructor = LoginModalComponent.bind({})
SelectInstructor.args = {
  modalType: MODAL_TYPES.INSTRUCTORS,
}

export const TimeSlot = LoginModalComponent.bind({})
TimeSlot.args = {
  modalType: MODAL_TYPES.TIME_SLOT,
}

export default {
  title: 'Modals',
  component: LoginModalComponent,
}
