import React, { Component } from 'react';
import { Box } from './Box/Box';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistict';
import Section from './Section/Section ';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateKeys = Object.keys(this.state);

  /////////////////////////////_______________________
  GetCountFeedback = evt => {
    this.setState({ [evt.target.name]: this.state[evt.target.name] + 1 });
  };
  /////////////////////////////_______________________
  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const values = Object.values(this.state);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    if (total >= 1) {
      return Math.round((this.state.good / total) * 100);
    }
  };

  render() {
    const total = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = `${this.countPositiveFeedbackPercentage()}%`;

    return (
      <Box>
        <Section text="Please leave feedback">
          <FeedbackOptions
            foo={this.GetCountFeedback}
            stateKeys={this.stateKeys}
          />
        </Section>
        <Section text="Statistics">
          {total >= 1 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Box>
    );
  }
}
