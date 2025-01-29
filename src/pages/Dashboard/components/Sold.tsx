import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from '@mui/material/Skeleton';
import { useDashboardStore } from '../../../store/useStore';
import styled from 'styled-components';

import { RecentlySoldContainer, SoldList, SoldItem, SoldImage, SoldName, SoldPrice, H2 } from './Styles';

const SkeletonSoldItem = styled(SoldItem)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SkeletonImage = styled(Skeleton)`
  border-radius:20px;
  width:8rem;
  min-height:5rem;
  padding-left:2rem;
`;

const SkeletonName = styled(Skeleton)`
padding-top:1rem;
  width: 6rem;
  height: 1.2rem;
  margin-top: 3rem;
`;

const SkeletonPrice = styled(Skeleton)`
  width: 6rem;
  height: 2rem;
  margin-top: 0.3rem;
`;

function Sold() {
  const { RecentSold, loading } = useDashboardStore();

  return (
    <RecentlySoldContainer>
      <H2>Recently Sold</H2>
      <SoldList>
        {loading ? (
          Array(2).fill(0).map((_, index) => (
            <SkeletonSoldItem key={index}>
              <SkeletonImage variant="rectangular" />
              <SkeletonName variant="text" />
              <SkeletonPrice variant="text" />
            </SkeletonSoldItem>
          ))
        ) : (
          RecentSold.map((re) => (
            <SoldItem key={re.name}>
              <SoldImage src={re.photo} />
              <SoldName>{re.name}</SoldName>
              <SoldPrice>{re.price} - earned</SoldPrice>
            </SoldItem>
          ))
        )}
      </SoldList>
    </RecentlySoldContainer>
  );
}

export default Sold;
