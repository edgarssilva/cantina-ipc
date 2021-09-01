import React from 'react';
import { Text } from 'react-native';

import { Container, IPCLogo, MenuIcon } from './styles';
import IPCsource from '../../assets/ipclogo.png';

const MenuBar = () => {
  return (
    <Container>
      <MenuIcon color='#282828' size={40} />
      <IPCLogo source={IPCsource} />
    </Container>
  );
};

export default MenuBar;
