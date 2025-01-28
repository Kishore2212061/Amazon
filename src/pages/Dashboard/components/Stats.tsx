import { Rc } from './Styles'
import Image from '../../../assets/Cardimage (2).png'
import { Im, TextC } from './Styles'
function Stats() {
  return (
    <Rc>
      <TextC>
        <strong>Good Job!</strong>
        <p>You have over 20,000 visitors in the last 10 days. Keep it up!</p>
      </TextC>
      <Im src={Image}></Im>
    </Rc>

  )
}

export default Stats