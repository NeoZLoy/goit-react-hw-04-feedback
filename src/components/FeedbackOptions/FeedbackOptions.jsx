import { ButtonsWrapper, Button} from "./FeedbackOptions.styled"
import { nanoid } from "nanoid"


export const FeedbackOptions = ({handleClick}) => {
    const options = ['good', 'neutral', 'bad']
    return(
        <ButtonsWrapper>
            {options.map(option => (
                <Button key={nanoid()} onClick = {() => handleClick(option)}>{option}</Button>
            ))}
        </ButtonsWrapper>
    )
} 