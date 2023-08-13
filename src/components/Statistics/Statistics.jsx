import { Context } from 'context/stateContext';
import { useContext } from 'react';

export default function Statistics() {
  const { good, neutral, bad, totalFeedback, positivePercentage } = useContext(Context);

     return (
      <>
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive feedback: {positivePercentage}%</p>
         </div>  
      </>)
};