import { useDashboardStore } from '../../../../../store/useStore';
import { StatsContainer, StatBox, StatValue, StatValue1 } from './style';
import Skeleton from 'react-loading-skeleton';

const Title=()=> {
  const { Stat, loading } = useDashboardStore();

  return (
    <StatsContainer>
      {loading ? (
        Array(3).fill(0).map((_, index) => (
          <StatBox key={index}>
            <Skeleton width={70} height={50} />
            <Skeleton width={100} height={20} />
          </StatBox>
        ))
      ) : (
        Stat.map((st) => (
          <StatBox key={st.value}>
            <StatValue1>{st.value}</StatValue1>
            <StatValue>{st.label}</StatValue>
          </StatBox>
        ))
      )}
    </StatsContainer>
  );
}

export default Title;
