import Oven from './Oven'
import Sink from './Sink'

const Kitchen = props => {
  return (
    <div className="plan-item-box" id="kitchen">
      <p className="room-title" id="kitchen-label">Kitchen</p>
      <Oven />
      <Sink />
    </div>
  )
}

export default Kitchen