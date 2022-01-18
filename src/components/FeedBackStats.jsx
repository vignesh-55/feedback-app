import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

function FeedBackStats() {
    const {feedBack} = useContext(FeedbackContext)

    const average = (feedBack.reduce((acc, curr) => {
        return acc + curr.rating 
    }, 0) / feedBack.length).toFixed(1).replace(/[.,]0$/,'');


    return (
        <div className="feedback-stats">
            <h4>{feedBack.length} Comments / Reviews</h4>
            <h4>Average rating: {isNaN(average) ? 'Nil' : average}</h4>
        </div>
    )
}


export default FeedBackStats

