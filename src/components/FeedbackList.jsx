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

export default FeedbackList