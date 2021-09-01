import React from 'react';
import { View, Text } from 'react-native';

import { Container, IPCLogo } from './styles';

import IPCsource from '../../../assets/ipclogo.png';

const MenuBar = () => {
  return (
    <Container>
      <Text>This is the title</Text>
      <IPCLogo source={IPCsource} />
    </Container>
  );
};

export default MenuBar;
