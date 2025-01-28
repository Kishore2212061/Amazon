import { Container,Inside } from './Styles'
import Message from './Message'
import Stats from './Stats'
import Title from './Title'
import Sold from './Sold'
import Performance from '../../Performance/Performance'
function Cardd() {
  return (
    <Container>
      <Inside>
      <Message></Message>
      <Stats></Stats>
      <Title></Title>
      <Sold></Sold>
      </Inside>
        <Performance></Performance>
    </Container>
  )
}

export default Cardd