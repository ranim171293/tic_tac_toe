import React from 'react';
import BlocksStyle from './style'
import Crosses from './../Crosses';
// import Button from '../../Components/Button';
import Noughts from './../Noughts';
class Blocks extends React.PureComponent {
  render() {
    const {type, value, blockClick } = this.props;
    let blockValue = null;
    if(value){
      blockValue = value && value === 'X'? <Crosses /> :  <Noughts />
    }
  
    return (
      <BlocksStyle>
        <button className={type} onClick={blockClick}>{blockValue}</button>
      </BlocksStyle>
    )
  }
}

export default Blocks;