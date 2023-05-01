import Oven from './Oven'
import Sink from './Sink'

const Kitchen = props => {
  return (
    <div className="plan-item-box">
      <p className="room-title">Kitchen</p>
      <Oven />
      <Sink />
    </div>
  )
}

export default Kitchen