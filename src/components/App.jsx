import React from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Statistics from "./Statistics/Statistics"
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return ( 
    <>
      <Section title="Please leave your feedback:">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleFeedback}
        />
      </Section>
        
      <Section title="Statistics:">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback yet." />
        )}
      </Section>
    </>
    )
  };
};
