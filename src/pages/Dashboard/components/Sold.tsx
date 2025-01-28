import { useDashboardStore } from '../../../store/useStore';
import { RecentlySoldContainer,SoldList,SoldImage,SoldName,SoldPrice ,SoldItem,H2} from './Styles';
function Sold() {
  const {RecentSold} =useDashboardStore();

  return (
    <RecentlySoldContainer>
    <H2>Recently Sold</H2>
    <SoldList>
        {RecentSold.map((re)=>(
            <SoldItem key={re.name}>
                <SoldImage src={re.photo}></SoldImage>
                <SoldName>{re.name}</SoldName>
                <SoldPrice>{re.price} - earned</SoldPrice>
            </SoldItem>
        ))}
    </SoldList>
</RecentlySoldContainer>
  )
}

export default Sold