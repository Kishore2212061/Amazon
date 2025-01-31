import { Rc } from './style'
import Image from '../../../../../assets/cardImage.png'
import { Im, TextC,Strong,Paragraph } from './style'
const Stats=()=> {
  return (
    <Rc>
      <TextC>
        <Strong>Good Job!</Strong>
        <Paragraph>You have over 20,000 visitors in the last 10 days. Keep it up!</Paragraph>
      </TextC>
      <Im src={Image}></Im>
    </Rc>

  )
}

export default Stats