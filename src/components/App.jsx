import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Statistics from "./Statistics/Statistics"
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import { Context } from "context/stateContext";
import { useContext } from "react";

export default function App() {
  const { totalFeedback } = useContext(Context);

  return (
    <>
      <Section title="Please leave your feedback:">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
        />
      </Section>

      <Section title="Statistics:">
        {totalFeedback ? (
          <Statistics />
        ) : (
          <Notification message="There is no feedback yet." />
        )}
      </Section>
    </>
  );
};
