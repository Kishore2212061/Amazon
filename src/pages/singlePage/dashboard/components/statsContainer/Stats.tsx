import { Rc } from './style'
import Image from '../../../../../assets/cardImage.png'
import { Im, TextC } from './style'
const Stats=()=> {
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