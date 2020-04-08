import React from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  CardContent,
  CardHeader,
  CardHeaderText,
  CardFooter,
  Title,
  Value,
  Description,
  Limit,
  Annotation,
} from './styles';

import Menu from '../Menu';

export default function Card() {
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animateEvent = new Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Menu translateY={translateY} />

      <PanGestureHandler
        onGestureEvent={animateEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Content
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-350, 0, 380],
                  outputRange: [-50, 0, 380],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        >
          <CardHeader>
            <Icon name="credit-card" size={24} color="#666" />
            <CardHeaderText>Cartão de Crédito</CardHeaderText>
          </CardHeader>
          <CardContent>
            <Title>FATURA ATUAL</Title>
            <Value>R$1.322,57</Value>
            <Description>
              Limite disponível: <Limit>R$ 4.578,00</Limit>
            </Description>
          </CardContent>
          <CardFooter>
            <Icon name="shopping-cart" size={24} color="#666" />
            <Annotation>
              Compra mais recente em Lojas Americanas no valor de R$ 199,00
              ontem
            </Annotation>
          </CardFooter>
        </Content>
      </PanGestureHandler>
    </Container>
  );
}
