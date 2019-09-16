import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Dimensions } from "react-native";

const shortcutDimension = {height: 135, width: 135};
const graphHeight = shortcutDimension.height * 1.8;

export const Container = styled(LinearGradient)`
  flex: 1;
  /* flex-direction: row; */
`;

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  /* justify-content: flex-end; */
  /* justify-content: center; */
  /* flex-direction: column; */
  /* flex-direction: row; */
  /* width: 100%; */
  /* background-color: blue; */
  /* align-items: stretch; */
  /* margin: 1px; */
`;

export const GraphContainer = styled.View`
  /* flex: 1; */
  /* border: 1px; */
  height: ${graphHeight}px;
  /* align-content: center; */
  justify-content: center;
`;

export const HistoryContainer = styled.View`
  flex: 1;
`;

export const History = styled.View`
  /* flex: 1; */
  /* border: 1px; */
  /* align-content: center; */
  background-color: #ffffff;
  border-radius: 12px;
  margin-left: 8px;
  margin-right: 8px;
  padding: 12px;

  left: 0px;
  right: 0px;
  height: ${Dimensions.get('window').height - graphHeight}px;

  box-shadow: 0px 4px 4px #999;

  position: absolute;
  /* opacity: 0.8; */
`;

export const ShortcutContainer = styled.View`
  /* flex: 1; */
  /* border: 0.1px; */

  /* top: 520px;
  position: absolute; */
  /* vertical-align: bottom; */
  /* margin-left: 8px; */
  /* margin-right: 8px; */
  /* background-color: #ffffff; */
`;

export const Shortcuts = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 20, paddingRight: 12 },
})`
  /* height: 100px; */
  /* flex: 1; */
  /* background-color: white; */

  /* vertical-align: bottom; */
  /* flex: 1; */
  /* margin: 1px; */
  /* border: 1px; */
  /* align-self: fle */
  /* width: 100%; */
  margin-bottom: 8px;
`;

export const Shortcut = styled.View`
  /* flex: 1; */
  /* background-color: #9FE5F6; */
  /* background-color: #fff; */
  background-color: #72D8D1;
  /* border-radius: 8px; */
  /* color: #fff; */
  height: ${shortcutDimension.height}px;
  width: ${shortcutDimension.width}px;
  padding: 5px;
  /* margin: 4px; */
  margin-right: 8px;

  border: ${StyleSheet.hairlineWidth}px;
  /* border: 1px; */
  /* border-color: #00C9FF */
  /* border-color: #2eb43b */
  border-color: #fff

  /* opacity: 0.5; */
  /* justify-content: space-between; */
  /* border: 1px; */

  /* shadow-color: #000; */
  /* shadow-offset: {width: 0, height: 2}; */
  /* shadow-opacity: 0.8; */
  /* shadow-radius: 2; */
  /* elevation: 1; */

  /* box-shadow: 0px 1px 1px #333; */

  /* border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
  margin-left: 5;
  margin-right: 5;
  margin-top: 10; */
`;

export const ShortcutText = styled.Text`
  /* color: #00C9FF; */
  /* color: #2eb43b; */
  color: #222;
  font-weight: 100;
  font-size: 12px;
`;