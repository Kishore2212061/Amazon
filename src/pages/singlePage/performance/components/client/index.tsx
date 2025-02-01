import { useDashboardStore } from "../../../../../store/useStore";
import { Title, ClientsContainer, ClientBox, ClientP, P,Titles } from './style';
import { AsyncImage } from 'loadable-image'; // For loading images with async
import { Slide } from 'transitions-kit'; // For slide transition
import { useEffect } from 'react';
import { useLoadDashboardData } from "../../../../../store/dummy";

const Client=()=> {
  const { Client } = useDashboardStore();
  const loadDashboardData = useLoadDashboardData();

  useEffect(() => {
    loadDashboardData();
  }, []);
  const placeholderClients = Array(4).fill({
    name: 'Loading..',
    photo: 'default-photo.jpg',
  });

  const clientsToDisplay = Client.length > 0 ? Client.slice(0, 4) : placeholderClients;

  return (
    <>
      <Title>Performance </Title>
      <Titles>New clients ({clientsToDisplay.length})</Titles>
      <P>see all</P>
      <ClientsContainer>
        {clientsToDisplay.map((client, index) => (
          <ClientBox key={index}>
            <AsyncImage
              src={client.photo}
              Transition={Slide}
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                padding: "2rem",
                marginLeft:"3rem"

              }}
              loader={<div style={{ background: '#888', width: '100%', height: '100%' }} />} // Loader style
            />
            <ClientP>{client.name}</ClientP>
          </ClientBox>
        ))}
      </ClientsContainer>
    </>
  );
}

export default Client;