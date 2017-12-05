import React, { Component } from 'react';
import './App.css';

const defaultStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: defaultStyle,
      buttonStyle: {},
      count: 0,
    };

    this.onButtonHover = this.onButtonHover.bind(this);
    this.randomizePosition = this.randomizePosition.bind(this);
  }

  onButtonHover() {
    if (this.state.count >= 2) {
      this.setState({
        displayActualButton: true,
        style: defaultStyle,
        buttonStyle: { display: 'none' }
      });
      return;
    }
    this.randomizePosition();
  }

  randomizePosition() {
    const h = Math.random()*80;
    const w = Math.random()*80;

    this.setState({
      style: {},
      buttonStyle: {
        top: `${h}vh`,
        left: `${w}vw`,
      },
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className="hunnedHeight">
        helo wold welcom 2 my site
        <div className="hunnedHeight annoyingContainer" style={this.state.style}>
          <div
            className="annoyingButton"
            style={this.state.buttonStyle}
            onMouseOver={this.onButtonHover}
            onClick={() => { window.location.href = 'http://www.zombo.com' }}
          >
            <button>
              click me to enter
            </button>
          </div>
          {this.state.displayActualButton && <div>Sorry u are not welcome</div>}
        </div>
      </div>
    );
  }
}

export default App;
