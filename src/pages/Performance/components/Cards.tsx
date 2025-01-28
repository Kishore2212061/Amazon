import { ProgressCardd } from './Styles'
import Client from './Client'
import Progress from './Progress'
import { H6 } from './Styles'
function Cards() {
  return (
    <ProgressCardd>
        <Client></Client>
        <H6>Your Progress</H6>
        <Progress></Progress>
    </ProgressCardd>
  )
}

export default Cards