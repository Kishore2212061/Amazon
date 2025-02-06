import styled from "styled-components";

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProgressBox = styled.div`
  background: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-left: 1.5rem;
  margin-bottom: 1.6rem;
  border-radius: 30px;
  padding-top: 1rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
`;

export const FlexProperty = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Hrr = styled.hr`
  border: 2px solid #ffcc80;
`;
export const Percentage = styled.span<{ isPositive: boolean }>`
  border-radius: 20px;
  width: 4rem;
  height: 1.7rem;
  font-weight: bold;
  padding-top: 0.5rem;
  margin-top: 0.9rem;
  background-color: ${(props) => (props.isPositive ? "#90EE90" : "#ffcccb")};
  color: ${(props) => (props.isPositive ? "green" : "red")};
`;
