import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #525ea6;
`;

export const LogoContainer = styled.View`
  flex: 1 1 35%;
`;

export const IPCLogo = styled.Image`
  flex: 1;
  margin-top: 15px;
  resize-mode: contain;
  height: 100px;
  width: 200px;
  display: flex;
`;

export const Container2 = styled.View`
  flex: 1 0 65%;
  padding: 30px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
