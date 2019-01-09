import React, { Component } from 'react';

import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '~/components/Header';

import api from '~/services/api';

import styles from './styles'
export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />,
  };

  state = {
    data: [],
    loading: false,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username');
    const { data } = await api.get(`/users/${username}/repos`);

    this.setState({
      data,
      loading: false,
    });
  }

  renderList=()=>(
    <Text>Lista 123</Text>
  )

  render() {
    const { loading } = this.state;
     return (
      <View>
        <Header title="Repositories" />
        { loading ? <ActivityIndicator style={styles.loading}/> : this.renderList() }
    </View>
     )
  }
}
