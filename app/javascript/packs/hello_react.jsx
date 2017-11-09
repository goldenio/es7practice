import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import 'babel-polyfill'
import Todos from '../todos/components'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David',
}

Hello.propTypes = {
  name: PropTypes.string,
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Todos />,
    document.body.appendChild(document.createElement('div')),
  )
})
