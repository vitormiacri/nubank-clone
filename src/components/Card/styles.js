import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Content = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
`;

export const CardList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 10,
    paddingRight: 20,
  },
})``;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
`;

export const CardHeaderText = styled.Text`
  font-size: 13px;
  color: #999;
  margin-left: 10px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #22b3c2;
  font-weight: bold;
`;

export const Value = styled.Text`
  font-size: 32px;
  color: #22b3c2;
`;

export const Description = styled.Text`
  font-size: 12px;
  margin-top: 3px;
  color: #333;
`;

export const Limit = styled.Text`
  font-size: 12px;
  margin-top: 3px;
  color: #a0c746;
`;

export const CardFooter = styled.View`
  padding: 25px;
  background: #eee;
  border-radius: 4px;
  flex-direction: row;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
  margin-left: 10px;
  padding-right: 20px;
`;
