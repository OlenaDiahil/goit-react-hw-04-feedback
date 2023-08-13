import { Context } from 'context/stateContext';
import { useContext } from 'react';

export default function FeedbackOptions({ options }) {
    const { handleFeedback } = useContext(Context);

    return (
        <div>
            {options.map((option) => (
                <button key={option} onClick={() => handleFeedback(option)}>
                    {option}
                </button>
            ))}
        </div>
    );       
};
