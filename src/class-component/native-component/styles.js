import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CardContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  border-radius: 20px;
  background-color: red;
`;

export const CardTitle = styled.Text`
  color: black;
  font-size: 50px;
  font-weight: bold;
`;

export const CardSubtitle = styled.Text`
  color: white;
  font-size: 30px;
  font-style: italic;
`;
