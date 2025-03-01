import { Component } from 'react';

export class Button extends Component {
 
  render() {
    return (
      <div>
        <h1>Будь ласка, залиште відгук</h1>
        <button onClick={this.props.onGood}>Good</button>
        <button onClick={this.props.onNeutral}>Neutral</button>
        <button onClick={this.props.onBad}>Bad</button>
      </div>
    );
  }
}
