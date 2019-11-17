import React from 'react';
import Crosses from '../../Components/Crosses';
import Button from '../../Components/Button';
import Noughts from '../../Components/Noughts';
import FirstPageStyle from './style';

class FirstPage extends React.Component {

  playType() {
    window.location.pathname = '/selectPlayer';
  }
  render () {
    return (
      <FirstPageStyle>
        <div className="imageBlock">
          <Crosses />
          <Noughts />
        </div>
        <div>Choose your play mode</div>
        <div className="buttonsBlock">
          <Button text= 'With AI' type= 'primary' clickPlayMode={() => this.playType()} />
          <Button text= 'With Friends' type='secondary' clickPlayMode={() => this.playType()} />
        </div>
      </FirstPageStyle>
    )
  }
}

export default FirstPage;