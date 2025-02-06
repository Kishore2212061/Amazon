import "react-loading-skeleton/dist/skeleton.css";
import { useDashboardStore } from "../../../../../store/useStore";
import { ShoppingBag, Glasses } from "lucide-react";
import ProductBag from "../../assests/ProductBag.jpg";
import {
  RecentlySoldContainer,
  SoldList,
  SoldItem,
  SoldImage,
  SoldName,
  SoldPrice,
  H2,
  SkeletonSoldItem,
  SkeletonImage,
  SkeletonName,
  SkeletonPrice,
  Container,
  Title,
  IconContainer,
  IconContainerWrapper,
  Card,
  Stats,
} from "./style";
const Sold = () => {
  const { RecentSold, loading } = useDashboardStore();

  return (
    <RecentlySoldContainer>
      <H2>Recently Sold</H2>
      <SoldList>
        {loading
          ? Array(2)
              .fill(0)
              .map((_, index) => (
                <SkeletonSoldItem key={index}>
                  <SkeletonImage variant="rectangular" />
                  <SkeletonName variant="text" />
                  <SkeletonPrice variant="text" />
                </SkeletonSoldItem>
              ))
          : RecentSold.map((re) => (
              <SoldItem key={re.name}>
                <SoldImage src={ProductBag} />
                <SoldName>{re.name}</SoldName>
                <SoldPrice>&nbsp;{re.price} - earned</SoldPrice>
              </SoldItem>
            ))}
        {!loading && (
          <Container>
            <IconContainerWrapper>
              <IconContainer>
                <Glasses size={35} color="#333" />
              </IconContainer>
              <IconContainer>
                <ShoppingBag size={35} color="#333" />
              </IconContainer>
            </IconContainerWrapper>

            <Card>
              <Title>Dresses</Title>
              <Stats>25 items &nbsp; &nbsp; $3.5k earned</Stats>
            </Card>
          </Container>
        )}
      </SoldList>
    </RecentlySoldContainer>
  );
};

export default Sold;
