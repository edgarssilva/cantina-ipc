import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const InputText = styled.TextInput`
  height: 40px;
  margin-top: 5px;
  font-size: ${(props) => props.fontsize || "10px"};
  background-color: #e8e8eb;
  border-radius: 7px;
  padding: 10px;
`;
