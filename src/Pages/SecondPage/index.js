import React from 'react';
import Crosses from '../../Components/Crosses';
import Button from '../../Components/Button';
import Noughts from '../../Components/Noughts';
import SecondPageStyle from './style';

class SecondPage extends React.Component {
  componentWillMount(){
    window.localStorage.clear();
  }

  selectingSide() {
    // let tic = document.getElementsByName('tic');
    let data = document.getElementsByName('tic');
    data.forEach(ele => {
      if(ele.checked){
        let value = ele.defaultValue;
        window.localStorage.setItem('value', value);
        window.location.pathname = '/play';
      }
    })
  }
  render () {
    return (
      <SecondPageStyle>
        <div>Pick your side</div>
        <div className="radioBlocks">
          <label><Crosses /><input type="radio" name="tic" value="X" /><div className="customeRadio"></div></label>
          <label><Noughts /><input type="radio" name="tic" value="O" /><div className="customeRadio"></div></label>
        </div>
        <Button type="secondary" text="continue" clickPlayMode={() => this.selectingSide()} />
      </SecondPageStyle>
    )
  }
}

export default SecondPage;