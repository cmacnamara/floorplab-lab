const Bath = (props) => {
  return (
    <div className="plan-item-box" id={`${props.size}-bath`}>
      <p className="room-title">{props.size} Bath</p>
    </div>
  )
}

export default Bath