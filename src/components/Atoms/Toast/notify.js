import React from 'react'
import { toast } from 'react-toastify'

import ToastAlert from './ToastAlert'

const Notify = (message, theme) => toast(<ToastAlert message={message} theme={theme} />)

export default Notify
