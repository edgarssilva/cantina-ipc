import styled from 'styled-components/native';
import { MenuIcon as Menu } from 'react-native-heroicons/solid';

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IPCLogo = styled.Image`
  flex: 3;
  resize-mode: contain;
`;

export const MenuIcon = styled(Menu)`
  flex-shrink: 3;
`;
