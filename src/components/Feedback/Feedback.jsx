import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateGoodFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  updateBadFeedback = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  updateNeutralFeedback = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const result =
      this.state.good + this.state.neutral + this.state.bad !== 0
        ? (this.state.good /
            (this.state.good + this.state.neutral + this.state.bad)) *
          100
        : 0;
    return result;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <FeedbackOptions
          onUpdateGoodFeedback={this.updateGoodFeedback}
          onUpdateBadFeedback={this.updateBadFeedback}
          onUpdateNeutralFeedback={this.updateNeutralFeedback}
        />

        {this.state.good > 0 || this.state.bad > 0 || this.state.neutral > 0 ? (
          <Statistics
            onCountTotalFeedback={totalFeedback}
            onCountPositiveFeedbackPercentage={positivePercentage.toFixed(2)}
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
