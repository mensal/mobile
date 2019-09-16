import React from 'react';
import { PieChart } from 'react-native-svg-charts'

import { Text } from 'react-native';
import {
  Container,
  SafeContainer,
  GraphContainer,
  HistoryContainer,
  History,
  ShortcutContainer,
  Shortcuts,
  Shortcut,
  ShortcutText,
} from './styles';
import { State } from 'react-native-gesture-handler';

// <SafeAreaView>
// </SafeAreaView>

// TODO: Seguir estes passos para corrigir os erros no Android:
// https://github.com/react-native-community/react-native-linear-gradient
// https://github.com/JesperLekland/react-native-svg-charts

// TODO: Geração de cores harmonizadas:
// http://colormind.io

export default function Main() {
  // const data = [1234, 2050];

  // const randomColor = () =>
  //   ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
  //     0,
  //     7,
  //   );

  // const pieData = data
  //   .filter(value => value > 0)
  //   .map((value, index) => ({
  //     value,
  //     svg: {
  //       fill: randomColor(),
  //       onPress: () => console.log('press', index),
  //     },
  //     key: `pie-${index}`,
  //   }));

  const pieData = [
    {
      value: 1234,
      svg: {
        fill: '#D88661',
      },
      key: 1,
    },
    {
      value: 2050,
      svg: {
        fill: '#C34759',
      },
      key: 2,
    },
  ];

  return (
    // https://uigradients.com/#VeniceBlue

    <Container colors={['#92FE9D', '#00C9FF']}>
      <SafeContainer>
        <GraphContainer>
          <PieChart
            style={{ height: 120 }}
            data={pieData}
            innerRadius="80%"
            labelRadius="Teste"
            animate={true}
          />
        </GraphContainer>
        <HistoryContainer>
          <History />
        </HistoryContainer>
        <ShortcutContainer>
          <Shortcuts>
            <Shortcut>
              <ShortcutText>+</ShortcutText>
            </Shortcut>
            <Shortcut>
              <ShortcutText>Outro atalho</ShortcutText>
            </Shortcut>
            <Shortcut>
              <ShortcutText>Outro atalho</ShortcutText>
            </Shortcut>
            <Shortcut>
              <ShortcutText>Outro atalho</ShortcutText>
            </Shortcut>
            <Shortcut>
              <ShortcutText>Outro atalho</ShortcutText>
            </Shortcut>
            <Shortcut>
              <ShortcutText>Outro atalho</ShortcutText>
            </Shortcut>
            <Shortcut>
              <ShortcutText>Outro atalho</ShortcutText>
            </Shortcut>
            <Shortcut>
              <ShortcutText>Outro atalho</ShortcutText>
            </Shortcut>
          </Shortcuts>
        </ShortcutContainer>
      </SafeContainer>
    </Container>
  );
}
