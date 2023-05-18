import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList({ handleDelete }) {
  const {feedback} = useContext(FeedbackContext)

  return (
    <div className='feedback-list'>
      {feedback ?
        feedback.map(item => (
          <FeedbackItem 
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          />
        )) : (
          <p>No Feedback Yet</p>
        )
      }
    </div>
  )
}
export default FeedbackList