import React from 'react'
import { useDashboardStore } from '../../../store/useStore';
import { CC,Title,H3 } from './Styles';
function Message() {
    const{User}=useDashboardStore();
    const today = new Date();
    const day = today.toLocaleDateString("en-GB", { day: "2-digit" });
    const month = today.toLocaleDateString("en-GB", { month: "long" });
    const weekday = today.toLocaleDateString("en-GB", { weekday: "long" });
    const formattedDate = `${day} ${month}, ${weekday}`;
  return (
    <CC>
        <Title>Welcome back, {User}!</Title>
        <H3>{formattedDate}</H3>
    </CC>
  )
}

export default Message