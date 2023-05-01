const Bedroom = (props) => {
  return (
    <div className="plan-item-box" id={`bed-${props.bedNum}`}>
      <p className="room-title">Bedroom {props.bedNum}</p>
    </div>
  )
}

export default Bedroom