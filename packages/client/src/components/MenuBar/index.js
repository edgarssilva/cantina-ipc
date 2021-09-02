import React from 'react';
import { View } from 'react-native';

import { Container, IPCLogo, HamburgerContainer } from './styles';
import IPCsource from '../../assets/ipclogo.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MenuBar = () => {
  return (
    <Container>
      <HamburgerContainer>
        <MaterialCommunityIcons name='menu' size={33} color='#282828' />
      </HamburgerContainer>
      <IPCLogo source={IPCsource} />
      <View></View>
    </Container>
  );
};

export default MenuBar;
