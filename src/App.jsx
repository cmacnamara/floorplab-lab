import './App.css'
import FloorPlan from './FloorPlan'

function App() {
  return (
    <>
      <FloorPlan>
        <Kitchen>
          <Oven />
          <Sink />
        </Kitchen>
        <LivingRoom />
        <Bedroom bedNum={bedNum} />
        <Bedroom bedNum={bedNum} />
        <Bedroom bedNum={bedNum} />
        <Bath size={size} />
        <Bath size={size} />
      </FloorPlan>
    </>
  )
}

export default App
