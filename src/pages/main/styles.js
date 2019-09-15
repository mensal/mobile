import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
  flex-direction: row;
  background-color: blue;
  justify-content: center;
  margin: 1px;
`;

export const ShotcutContainer = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
})`
    /* height: 100px; */
  /* flex: 1; */
  /* background-color: white; */

  /* vertical-align: bottom; */
  /* flex: 1; */
  margin: 1px;
`;

export const Shortcut = styled.View`
  /* flex: 1; */
  background-color: red;
  height: 100px;
  width: 100px;
  /* justify-content: space-between; */
  margin: 1px;
`;
