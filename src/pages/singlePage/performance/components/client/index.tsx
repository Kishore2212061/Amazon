import { useDashboardStore } from "../../../../../store/useStore";
import {
  Title,
  ClientsContainer,
  ClientBox,
  ClientP,
  P,
  Titles,
} from "./style";
import { AsyncImage } from "loadable-image"; // For loading images with async
import { Slide } from "transitions-kit"; // For slide transition
import { useEffect } from "react";
import { useLoadDashboardData } from "../../../../../store/dummy";

import JohnClient from "../../assests/JohnClient.jpg";
import KaranClient from "../../assests/KaranClient.jpg";
import ShyamClient from "../../assests/ShyamClient.jpg";
import WilsenClient from "../../assests/WilsenClient.png";

const Client = () => {
  const { Client } = useDashboardStore();
  const loadDashboardData = useLoadDashboardData();

  useEffect(() => {
    loadDashboardData();
  }, []);

  const clientImages = [JohnClient, KaranClient, ShyamClient, WilsenClient];

  const clientsToDisplay =
    Client.length > 0
      ? Client.slice(0, 4).map((client, index) => ({
          ...client,
          photo: clientImages[index] || "default-photo.jpg",
        }))
      : clientImages.map((image) => ({
          name: "Loading..",
          photo: image,
        }));

  return (
    <>
      <Title>Performance</Title>
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
                marginLeft: "3rem",
              }}
              loader={
                <div
                  style={{ background: "#888", width: "100%", height: "100%" }}
                />
              } // Loader style
            />
            <ClientP>{client.name}</ClientP>
          </ClientBox>
        ))}
      </ClientsContainer>
    </>
  );
};

export default Client;
