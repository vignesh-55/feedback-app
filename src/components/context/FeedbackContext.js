import { createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import FeedbackData from '../../data/feedbackData';

const FeedbackContext = createContext();

export const Feedbackprovider = ({children}) => {

    const [feedBack, setfeedBack] = useState(FeedbackData)
    const [feedbackEdit, setfeedbackEdit] = useState({
        item: {},
        edit: false
    })

    function deleteFeedBack(id){
        return setfeedBack(feedBack.filter(item => item.id !== id))
      }

    function addFeedBack(newFeedback) {
    newFeedback.id = uuidv4();
    setfeedBack([newFeedback, ...feedBack])
    }

    function editFeedback(item) {
        setfeedbackEdit({
            item,
            edit: true
        })
    }

    function updateFeedback(id, modifiedFb){
        setfeedBack(feedBack.map(item => item.id === id ? {...item,...modifiedFb} : item))
    }

    return <FeedbackContext.Provider value={{
            feedBack,
            deleteFeedBack,
            addFeedBack,
            editFeedback,
            feedbackEdit,
            updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;