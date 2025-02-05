import styled from "styled-components";

export const Rc = styled.div`
  display: flex;
  background-color: #ff8888;
  margin-left: 0.5rem;
  border-radius: 30px;
  width: 91%;
  color: white;
  height: 9%;
  @media (max-width: 1080px) {
    padding: 2rem;
    width: 90%;
  }
  @media (min-width: 1081px) {
    height: 20%;
    margin-top: 2rem;
  }
`;

export const TextC = styled.p`
  display: flex;
  word-wrap: break-word;
  flex-direction: column;
  padding-left: 1.5rem;
  @media (max-width: 1080px) {
    font-size: 200%;
  }
`;

export const Im = styled.img`
  width: 70%;
  @media (max-width: 1080px) {
    margin-left: 40%;
    width: 20%;
  }
`;

export const Strong = styled.strong`
  font-size: 1.8rem;
  padding-left: 0.5rem;
  padding-top: 1.5rem;
`;

export const Paragraph = styled.p`
  padding-left: 0.5rem;
`;
