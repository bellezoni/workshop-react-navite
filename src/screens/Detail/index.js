import React from 'react';
import {Image} from 'react-native'

import { Container } from './styles';

export default function Detail(props) {
  const params = props.navigation.getParam('user');

  return (
  <Container>
    {user && <Image source={{uri: UserInterfaceIdiom.avatar_url}} />}
  </Container>
  );
}