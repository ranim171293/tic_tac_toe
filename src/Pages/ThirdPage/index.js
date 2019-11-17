import React, {Fragment} from 'react';
import Blocks from '../../Components/Blocks';

import ThirdPageStyle from './style';
import { connect } from 'react-redux';

class ThirdPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: Array(9).fill(null),
      isNext: true,
      X:0,
      O:0,
    }
  }
  componentDidMount(){
    this.defaultSelection()
  }
  defaultSelection() {
    let selectedItem = window.localStorage.getItem('value');
    const isNext = selectedItem === 'O' ? false : true
    this.setState({
      isNext
    });
  }

  handleClick(i){
    const { blocks } = this.state;
    if(this.findWinner(blocks) || blocks[i]) {
      console.log(blocks[i])
      return
    };
    blocks[i] = this.state.isNext ? 'X' : 'O';
    this.setState({
      blocks,
      isNext: !this.state.isNext
    });
  }

  findWinner(blocks) {
    const possiblites = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < possiblites.length; i++) {
      const [a, b, c ] = possiblites[i];
      console.log(a,b,c,blocks)
      if (blocks[a] && blocks[a] === blocks[b] && blocks[a] === blocks[c]) {
        const winner = blocks[a];
        this.setState((prevState) => ({
          X : prevState[winner]++
        }))
        return winner;
      }
    }
    return null;
  }

  renderGameBoard(){
    return (  
      <div className="gameArea">
        <div className="playGround">
          <Blocks type="firstBox" value={this.state.blocks[0]} blockClick={() => this.handleClick(0)} />
          <Blocks type="middleBox" value={this.state.blocks[1]} blockClick={() => this.handleClick(1)} />
          <Blocks type="firstBox" value={this.state.blocks[2]} blockClick={() => this.handleClick(2)} />
        </div>
        <div className="playGround">
          <Blocks type="firstBox" value={this.state.blocks[3]} blockClick={() => this.handleClick(3)} />
          <Blocks type="middleBox" value={this.state.blocks[4]} blockClick={() => this.handleClick(4)} />
          <Blocks type="firstBox"  value={this.state.blocks[5]} blockClick={() => this.handleClick(5)} />
        </div>
        <div className="playGround">
          <Blocks type="forthBox" value={this.state.blocks[6]} blockClick={() => this.handleClick(6)} />
          <Blocks type="thirdBox" value={this.state.blocks[7]} blockClick={() => this.handleClick(7)} />
          <Blocks type="forthBox" value={this.state.blocks[8]} blockClick={() => this.handleClick(8)} />
        </div>
      </div>
    )
  }
  
  render () {
    const { blocks, X, O } = this.state;
    const winner = this.findWinner(blocks);
    return (
      <ThirdPageStyle>
        <div className="playersBoard">
          <div>X</div>
          <div className="score"><span>{X}</span><span>-</span><span>{O}</span></div>
          <div>O</div>
        </div>
        Winner is {winner}
        <button value="reset"/>
        <button value="nextGame"/>
        {this.renderGameBoard()}
      </ThirdPageStyle>
    )
  }
}
export default ThirdPage