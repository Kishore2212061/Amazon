import { useDashboardStore } from '../../../store/useStore';
import { CC, Title, H3 } from './Styles';
import {BlinkBlur } from 'react-loading-indicators';

function Message() {
  const { User, loading } = useDashboardStore(); 
  const today = new Date();
  const day = today.toLocaleDateString("en-GB", { day: "2-digit" });
  const month = today.toLocaleDateString("en-GB", { month: "long" });
  const weekday = today.toLocaleDateString("en-GB", { weekday: "long" });
  const formattedDate = `${day} ${month}, ${weekday}`;

  return (
    <CC>
      <Title>
        Welcome back, {loading ? <BlinkBlur color="silver" size="small"/>: User}!
      </Title>
      <H3>{formattedDate}</H3>
    </CC>
  );
}

export default Message;
