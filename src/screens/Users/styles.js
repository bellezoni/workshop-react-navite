import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  padding-top: ${Platform.OS === 'android' ? '32' : '0'}px;
`;

export const Form = styled.View`
  margin: 24px;
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholder: 'Type username',
  placeholderTextColor: '#636e72',
  autoCapitalize: 'none',
  autoCorrect: false,
  autoCompleteType: 'off'
})`
  flex: 1;
  background-color: #b2bec3;
  height: 44px;
  border-radius: 6px;
  padding: 4px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  width: 64px;
  height: 44px;
  border-radius: 6px;
  background-color: #2d3436;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonIcon = styled(MaterialIcons).attrs({
  name: 'add',
  color: '#ffffff',
  size: 24
})``;

export const ButtonLoading = styled.ActivityIndicator.attrs({
  color: '#fffffff',
  size: 'small'
})``;

export const List = styled.FlatList``;

export const ListItem = styled.TouchableOpacity`
  padding: 16px 24px;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const Content = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const Username = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2
})`
  font-size: 16px;
`;