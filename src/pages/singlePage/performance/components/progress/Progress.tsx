import { ProgressB, ProgressBox, FlexProperty, Hrr, Percentage } from './style';
import { useDashboardStore } from '../../../../../store/useStore';
import { ShoppingCart } from 'lucide-react';
const Progress=()=> {
  const { Performance } = useDashboardStore();
  const placeholderPerformance = Array(3).fill({
    label: 'Loading...',
    value: 'Fetching...',
    orders: 'Fetching...',
    percentage: 0,
  });
  const performanceToDisplay = Performance.length > 0 ? Performance : placeholderPerformance;

  return (
    <ProgressB>
      {performanceToDisplay.map((per, index) => (
        <ProgressBox key={index}>
          <FlexProperty>
            <h3>{per.label}</h3>
            <h3>{per.value}</h3>
          </FlexProperty>
          <Hrr />
          <FlexProperty>
            <h3 ><ShoppingCart size={20}  style={{ paddingRight: '13px' }}/>{per.orders} Orders</h3>
            <Percentage isPositive={per.percentage >= 0}>
              {per.percentage}%
            </Percentage>
          </FlexProperty>
        </ProgressBox>
      ))}
    </ProgressB>
  );
}

export default Progress;
