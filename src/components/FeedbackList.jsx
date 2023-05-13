import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback }) {
  return (
    <div className='feedback-list'>
      {feedback ?
        feedback.map(item => (
          <FeedbackItem 
          key={item.id} 
          text={item.text}
          rating={item.rating}
          />
        )) : (
          <p>No Feedback Yet</p>
        )
      }
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}

export default FeedbackList