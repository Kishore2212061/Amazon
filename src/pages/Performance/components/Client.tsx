import { useDashboardStore } from "../../../store/useStore";
import { Title, ClientsContainer, ClientImage, ClientBox, ClientP } from './Styles';
function Client() {
  const { Client } = useDashboardStore();

  return (
    <>
      <Title>Performance</Title>
      <Title>New  clients ({Client.length}) </Title>
      <ClientsContainer>
        {Client.map((client) => (
          <ClientBox>
            <ClientImage src={client.photo}></ClientImage>
            <ClientP>{client.name}</ClientP>
          </ClientBox>
        ))}
      </ClientsContainer>
    </>
  )
}

export default Client