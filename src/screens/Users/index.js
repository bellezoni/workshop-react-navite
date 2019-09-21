import React, { useState, useEffect, } from "react";
import { AsyncStorage } from 'react-native';
import axios from 'axios';

import {
  Container,
  Form,
  Input,
  Button,
  ButtonLoading,
  ButtonIcon,
  List,
  ListItem,
  Avatar,
  Content,
  Username,
  Bio
} from "./styles";

function Users(props) {

  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("users").then(async items => {
      if (items) await setUsers(JSON.parse(items));
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  async function addHandler() {

    if (!username.length) return;

    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );

      setUsers([...users, response.data]);
      setUsername('');

    } catch (error) { 
      //
    } finally {
      setLoading(false);
    }

  }

  function renderItem({ item }) {
    return (
      <ListItem
        onPress={() => props.navigation.navigate('Detail', { user: item })}>
        <Avatar source={{ uri: item.avatar_url }} />
        <Content>
          <Username>@{item.login}</Username>
          <Bio>{item.bio || 'Não tem informação.'}</Bio>
        </Content>
      </ListItem>
    );
  }

  return (
    <Container>
      <Form>
        <Input
          value={username}
          onChangeText={setUsername}
        />
        <Button
          onPress={addHandler}>
          {loading ? <ButtonLoading /> : <ButtonIcon />}
        </Button>
      </Form>

      <List
        data={users}
        keyExtractor={user => String(user.id)}
        renderItem={renderItem}
      />
    </Container>
  );
}

export default Users;