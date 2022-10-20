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
    this.setState(prevState => {
      return { [evt.target.name]: prevState[evt.target.name] + 1 };
    });
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
      <Box
        paddingBottom="30px"
        display="flex"
        flexDirection="column"
        marginLeft="auto"
        marginRight="auto"
        alignItems="center"
        width="500px"
        boxShadow="0px 1px 7px rgb(0 0 0), 0px 1px 8px rgb(0 0 0 / 67%), 0px 2px 3px rgb(0 0 0 / 47%)"
        borderRadius="0px 0px 4px 4px"
        backgroundColor="#cbcbcb"
        marginBottom="80px"
      >
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
