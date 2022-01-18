import { useState, useEffect, useContext } from 'react'
import Card from './styledComp/Card'
import Button from './styledComp/Button';
import SelectRating from './SelectRating';
import FeedbackContext from './context/FeedbackContext'

function FeedbackForm({reverse, handleNew}) {
    const [inputT, setinputT] = useState('');
    const [rating, setrating] = useState('');
    const [btnDis, setbtnDis] = useState(true);
    const [msg, setmsg] = useState('');
    const {addFeedBack, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setbtnDis(false)
            setinputT(feedbackEdit.item.text)
            setrating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    function handleInpChange(e){
        if(e.target.value.length === 0){
            setbtnDis(true)
            setmsg(null)
        }else if(e.target.value.length !== ''  &&  e.target.value.trim().length <= 10){
            setbtnDis(true);
            setmsg('Please give more than 10 characters');
        }else{
            setbtnDis(false);
            setmsg(null);
        }
        setinputT(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        if(inputT.trim().length > 10){
            const newFeedBack = {
                text: inputT,
                rating,
            }

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedBack);
                feedbackEdit.edit = false
                setbtnDis(true);
            }else{
                addFeedBack(newFeedBack);
            }
            setinputT('');
        }
    }

    return (
        <Card reverse={reverse}>
            <form onSubmit={handleSubmit}>
                <h2>Please rate us</h2>
                <SelectRating select={(rate) => setrating(rate)}/>
                <div className="input-group">
                    <input onChange={handleInpChange} type="text" name="input" id="input" placeholder="write here" value={inputT}/>
                    <Button type="submit" version="secondary" isDisabled={btnDis}>Post</Button>
                </div>
                {msg && <div className="message">{msg}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
