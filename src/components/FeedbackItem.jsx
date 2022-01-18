import {FaTimes, FaEdit} from 'react-icons/fa'
// import {useState} from 'react'
import Card from './styledComp/Card'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

function FeedbackItem({content, reverse}) {
    const {deleteFeedBack, editFeedback} = useContext(FeedbackContext)
    // const [state, setstate] = useState(8);
    // const [content, setcontent] = useState("Somewhat it is");

    // function clicked(){
    //     return setstate((prev) => {
    //         return prev+1;
    //     })
    // }

    // function clickedDesc(){
    //     return setstate((prev)=> {
    //         return prev-1;
    //     })
    // }

    return (
        // <div className="card">
        <Card reverse={reverse}>            
            <div className="num-display">{content.rating}</div>
            <button onClick={() => deleteFeedBack(content.id)} className="close">
                <FaTimes color="tomato" />
            </button>
            <button className="edit" onClick={() => editFeedback(content)}><FaEdit color="tomato"/></button>
            <div className="text-display">{content.text}</div>
            {/* <button onClick={clicked}>Click here</button>
            <button onClick={clickedDesc}>Click here</button> */}
        {/* </div> */}
        </Card>

    )
}

export default FeedbackItem
