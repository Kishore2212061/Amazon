import { Container } from "./style";
import Image from "../../../../../assets/cardImage.png";
import { ImageDiv, Text, Strong, Paragraph } from "./style";
const Stats = () => {
  return (
    <Container>
      <Text>
        <Strong>Good Job!</Strong>
        <Paragraph>
          You have over 20,000 visitors in the last 10 days. Keep it up!
        </Paragraph>
      </Text>
      <ImageDiv src={Image}></ImageDiv>
    </Container>
  );
};

export default Stats;
