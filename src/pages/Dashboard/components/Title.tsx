import { useDashboardStore } from '../../../store/useStore'
import { StatsContainer, StatBox, StatValue, StatValue1 } from './Styles';
function Title() {
  const { Stat } = useDashboardStore();
  return (
    <StatsContainer>
      {Stat.map((st) => (
        <StatBox key={st.label}>
          <StatValue1>{st.value}</StatValue1>
          <StatValue>{st.label}</StatValue>
        </StatBox>
      ))}
    </StatsContainer>
  )
}

export default Title