import { Component } from 'react';
import { Button } from './FeedBack/ButtonFeedBack';
import { FeedBack } from './FeedBack/FeedBack';
import { Notification } from './FeedBack/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickGood = () => {
    this.setState(prevState => ({ good: (prevState.good += 1) }));
  };
  onClickNeutral = () => {
    this.setState(prevState => ({ neutral: (prevState.neutral += 1) }));
  };
  onClickBad = () => {
    this.setState(prevState => ({ bad: (prevState.bad += 1) }));
  };
  render() {
    return (
      <>
        <Button
          onGood={this.onClickGood}
          onNeutral={this.onClickNeutral}
          onBad={this.onClickBad}
        />
        {this.state.good || this.state.neutral || this.state.bad ? <FeedBack 
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad} /> : <Notification message="There is no feedback"></Notification>}
        </>
    );
  }
}
