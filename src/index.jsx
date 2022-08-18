import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import humps from 'humps'

import './bootstrap'

import './i18n'

import App from './App'
import configureStore from './store/store'

const renderTags = () => {
  const nodes = Array.from(document.getElementsByTagName('onefitstop-widget'))
  nodes.map((node, i) => renderNode(node, `onefitstop-widget-${i}`))
}

const renderNode = (node, key) => {
  const initialState = {}
  const store = configureStore(initialState)

  const componentProps = Array.prototype.slice.call(node.attributes).reduce(
    (acc, curr) => ({
      ...acc,
      [humps.camelize(curr.name)]: curr.value,
    }),
    {}
  )

  render(
    <Provider store={store}>
      <App {...componentProps} />
    </Provider>,
    node
  )
}

renderTags()
