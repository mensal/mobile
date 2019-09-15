import React from 'react';

import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Container, ShotcutContainer, Shortcut } from './styles';

// <SafeAreaView>
// </SafeAreaView>

// TODO: Seguir este passo para corrigir o erro no Android:
// https://github.com/react-native-community/react-native-linear-gradient

export default function Main() {

  return (
    // https://uigradients.com/#VeniceBlue

    <Container colors={['#085078', '#85D8CE']}>
      <SafeAreaView>
        <Text>X</Text>
        <Text>Cleverson</Text>
        <ShotcutContainer>
          <Shortcut>
            <Text>X</Text>
          </Shortcut>
          <Shortcut>
            <Text>X</Text>
          </Shortcut>
        </ShotcutContainer>
      </SafeAreaView>
    </Container>
  );
}
