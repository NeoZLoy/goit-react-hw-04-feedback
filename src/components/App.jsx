import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Statistics } from "./Statistics/Statistics"
import { Section, NoFeedbackText } from "./Section.styled"
import { useEffect, useState } from "react";

export function App () {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0)
    const [isFeedbackGiven, setIsFeedbackGiven] = useState(false)
    const [positivePercentage, setPositivePercentage] = useState(0)

    // count total feedbacks
    useEffect(() => {
        setTotal(good+neutral+bad)    }, [good, neutral, bad])

    //count positive percentage
    useEffect(() => {
        if (!isFeedbackGiven){
            return
        }
        setPositivePercentage(Math.round(good/total*100))
    }, [good, total, isFeedbackGiven])
    
    const stats = {good, neutral, bad};
 
    function handleClick(type){
        if (type === "good"){
            setGood(prevState => prevState +1)
            setIsFeedbackGiven(true)          
        } else if (type === "neutral"){
            setNeutral(prevState => prevState +1)
            setIsFeedbackGiven(true)  
        } else{
            setBad(prevState => prevState +1)
            setIsFeedbackGiven(true)  
        }
    }

  
    return(
            <>
            <Section>
              <h2>Please leave feedback</h2>
              <FeedbackOptions handleClick = {handleClick} />
            </Section>
            <Section>
                <>
                    {isFeedbackGiven
                        ? (<Statistics 
                            stats = {stats}
                            total = {total}
                            percentage = {positivePercentage}/>)
                        : (<NoFeedbackText>No feedback yet :c</NoFeedbackText>)}
                </>
            </Section>
          </>
          
    )
}