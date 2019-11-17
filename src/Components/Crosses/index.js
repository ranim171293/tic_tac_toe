import React from 'react';
import CrossesStyle from './style.js'

class Crosses extends React.PureComponent {
  render () {
    return (
      <CrossesStyle>
        <div className="close"></div>
      </CrossesStyle>
    )
  }
}

export default Crosses;