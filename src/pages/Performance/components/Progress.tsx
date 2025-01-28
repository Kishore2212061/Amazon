import React from 'react'
import { ProgressB,ProgressBox,FlexProperty,Hrr,Percentage } from './Styles'
import { useDashboardStore } from '../../../store/useStore';
function Progress() {
  const {Performance} =useDashboardStore();
  return (
    <ProgressB>
                {Performance.map((per)=>(
                    <ProgressBox>   
                      <FlexProperty>
                        <h3>{per.label}</h3>
                        <h3>{per.value}</h3>                       
                      </FlexProperty>
                      <Hrr></Hrr>
                      <FlexProperty>
                        <h3>{per.orders} Orders</h3>
                        <Percentage isPositive={per.percentage >= 0}>{per.percentage}%
                        </Percentage>
                        </FlexProperty>
                    </ProgressBox>
                ))}
            </ProgressB>
  )
}

export default Progress