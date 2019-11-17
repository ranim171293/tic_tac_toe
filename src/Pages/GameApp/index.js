import React, {Fragment} from 'react';
import ThirdPage from '../ThirdPage';
import FirstPage from '../FirstPage';
import SecondPage from '../SecondPage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {connect} from 'react-redux'

class GameApp extends React.Component {
  render () {
    console.log('testing the pirops', this.props)
    return (
      <Fragment>
      <h1 className="gameTitle">TIC TAC TOE</h1>
      <div className="primaryWrapper">
        <Router>
        <div> 
          <Switch>
            <Route exact path='/' component={FirstPage}></Route>
            <Route exact path='/selectPlayer' component={SecondPage}></Route>
            <Route exact path='/play' component={ThirdPage}></Route>
          </Switch>
        </div>
      </Router>
      </div>
      </Fragment>
    )
  }
}


const mapStateToProps = function(state) {
  return state
}
const dispatchStateToProps = function(dispatch) {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, dispatchStateToProps)(GameApp);