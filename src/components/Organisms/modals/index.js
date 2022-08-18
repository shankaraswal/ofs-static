import React from 'react'
import PropTypes from 'prop-types'

import SessionTypeModal from '_components/Organisms/modals/session-type'
import LoginModal from '_components/Organisms/modals/login'
import SignUpModal from '_components/Organisms/modals/sign-up'
import TermsModal from '_components/Organisms/modals/terms'
// import AdditionalInfoModal from '_components/Organisms/modals/additional-info'
import InstructorsModal from '_components/Organisms/modals/select-instructor'
import TimeSlotModal from '_components/Organisms/modals/time-slot'

import { MODAL_TYPES } from './constants'

const Modal = ({ modalType }) => {
  switch (modalType) {
    case MODAL_TYPES.LOGIN:
      return <LoginModal />
    case MODAL_TYPES.TERMS:
      return <TermsModal />
    // case MODAL_TYPES.ADDITIONAL_INFO:
    //   return <AdditionalInfoModal />
    case MODAL_TYPES.SIGN_UP:
      return <SignUpModal />
    case MODAL_TYPES.SESSION_TYPE:
      return <SessionTypeModal />
    case MODAL_TYPES.INSTRUCTORS:
      return <InstructorsModal />
    case MODAL_TYPES.TIME_SLOT:
      return <TimeSlotModal />
    default:
      return null
  }
}

Modal.propTypes = {
  modalType: PropTypes.oneOf([null, Object.values(MODAL_TYPES)]),
}

Modal.defaultProps = {
  modalType: null,
}

export default Modal
