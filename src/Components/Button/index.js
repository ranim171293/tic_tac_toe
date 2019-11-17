import React from 'react';
import ButtonStyle from './style'

class Button extends React.PureComponent {
  render() {
    const {type, text, clickPlayMode } = this.props;
    return (
      <ButtonStyle>
        <button className={type} onClick={clickPlayMode}>{text}</button>
      </ButtonStyle>
    )
  }
}

export default Button;