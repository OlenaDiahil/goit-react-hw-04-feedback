import { createContext, useState } from "react";

export const Context = createContext()

export function GlobalContext({ children }) {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    const handleFeedback = (type) => {
        switch (type) {
        case "good":
            setGood(good + 1);
        break;
        case "neutral":
            setNeutral(neutral + 1);
        break;
        case "bad":
            setBad(bad + 1);
        break;
        default:
        break;
        }
    };
    
    const totalFeedback = good + neutral + bad;
    const positivePercentage = totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
    
    return <Context.Provider value={{good, setGood, neutral, setNeutral, bad, setBad, handleFeedback, totalFeedback,  positivePercentage}}>{children}</Context.Provider>
}
