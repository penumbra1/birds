import React from 'react'

import Icon from '../../icons/stat.svg'

import './Stats.module.css'

const Stats = ({ wingspan, length }) => (
  <ul styleName="container">
    <li>
      <Icon styleName="icon" />
      <div>
        <span>Размах крыльев:</span>
        <span>{wingspan} см</span>
      </div>
    </li>
    <li>
      <Icon styleName="icon" />
      <div>
        <span>Длина тела:</span>
        <span>{length} см</span>
      </div>
    </li>
  </ul>
)

export default Stats
