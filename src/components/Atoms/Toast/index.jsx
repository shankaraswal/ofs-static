import React from 'react'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import '_styles/toastify.global.scss'

import useStyles from './styles'

const Toast = () => {
  const styles = useStyles()
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      newestOnTop={false}
      closeOnClick={false}
      hideProgressBar
      pauseOnVisibilityChange
      draggable={false}
      pauseOnHover
      closeButton={false}
      toastClassName={styles.toastContent}
      transition={Slide}
      className={styles.toastContainer}
    />
  )
}

export default Toast
