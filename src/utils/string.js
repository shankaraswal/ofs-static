export const emailExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const isValidEmail = email => {
  if (typeof email !== 'string') {
    return false
  }

  return emailExpression.test(email.toLowerCase())
}

export const DATE_FORMAT = 'dd/MM/yyyy'
