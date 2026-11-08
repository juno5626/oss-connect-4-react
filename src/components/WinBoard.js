import React from "react"
import { Animated } from "react-animated-css";

/** The "player has won" display */
class WinBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerWhoWon: null,
      animationIn: "bounceInDown"
    }
    console.log("animation", this.state.animationIn)
  }


  styles = {
    winStyle: {
      'backgroundColor': 'white',
      'fontSize': '5em',
      'position': 'fixed',
      borderRadius: '20px'
    }
  }

  render() {
    if (this.props.playerWhoWon === 'red') {
      return (
        <>
          <div className='col-md-6'>
            <Animated animationIn={this.state.animationIn} isVisible={true} style={this.styles.winStyle}>
              학부이름은 Ai융합학부
            </Animated>
          </div>
        </>
      )
    }
    else if (this.props.playerWhoWon === 'blue') {
      return (
        <>
          <div className='col-md-6'>
            <Animated animationIn={this.state.animationIn} isVisible={true} style={this.styles.winStyle}>
              학부 이름은 전산전자공학부
            </Animated>
          </div>
        </>
      )  
    }
  }
}

export default WinBoard;