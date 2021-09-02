import React from 'react';
import { Text } from 'react-native';

import { Container, IPCLogo } from './styles';
import IPCsource from '../../assets/ipclogo.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MenuBar = () => {
  return (
    <Container>
      <MaterialCommunityIcons name='menu' size={30} color='#282828' />
      <IPCLogo source={IPCsource} />
    </Container>
  );
};

export default MenuBar;
