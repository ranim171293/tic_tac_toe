import React from 'react';
import NoughtsStyle from './style'

class Noughts extends React.PureComponent {
  render () {
    return (
      <NoughtsStyle>
        <div className="circle"></div>
      </NoughtsStyle>
    )
  }
}

export default Noughts;