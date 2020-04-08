import React from 'react';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Card from '~/components/Card';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Card />
      <Tabs />
    </Container>
  );
}
