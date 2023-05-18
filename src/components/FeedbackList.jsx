import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)

  return (
    <div className='feedback-list'>
      {feedback ?
        feedback.map(item => (
          <FeedbackItem 
          key={item.id}
          item={item}
          />
        )) : (
          <p>No Feedback Yet</p>
        )
      }
    </div>
  )
}
export default FeedbackList