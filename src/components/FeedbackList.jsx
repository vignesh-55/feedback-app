import {motion,AnimatePresence} from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

export default function FeedbackList({reverse}) {
    const {feedBack} = useContext(FeedbackContext)

    if(!feedBack || feedBack.length === 0){
        return <p>No data</p>
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedBack.map(item => <motion.div key={item.id} initial={{opacity: 0}}
                animate={{opacity: 1}} exit={{opacity: 0}}>
                    <FeedbackItem key={item.id} content={item} reverse={reverse}/>
                </motion.div>)}
            </AnimatePresence>
        </div>
    )

    // return (
    //     <div className="feedback-list">
    //         {feedBack.map(item => <FeedbackItem key={item.id} content={item} reverse={reverse}
    //            deleteThis={deleteThis}/>)}
    //     </div>
    // )
}
