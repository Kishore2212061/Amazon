import { useDashboardStore } from "../../../../../store/useStore";
import { Container, Title, H3, NotificationIcon } from "./style";
import { BlinkBlur } from "react-loading-indicators";
import { Bell } from "lucide-react";

const Message = () => {
  const { User, loading } = useDashboardStore();
  const today = new Date();
  const day = today.toLocaleDateString("en-GB", { day: "2-digit" });
  const month = today.toLocaleDateString("en-GB", { month: "long" });
  const weekday = today.toLocaleDateString("en-GB", { weekday: "long" });
  const formattedDate = `${day} ${month}, ${weekday}`;

  return (
    <Container style={{ position: "relative" }}>
      <NotificationIcon>
        <Bell size={20} color="black" />
      </NotificationIcon>
      <Title>
        Welcome back,{" "}
        {loading ? <BlinkBlur color="silver" size="small" /> : User}!
      </Title>
      <H3>{formattedDate}</H3>
    </Container>
  );
};

export default Message;
