import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <View style={styles.title} />
    <Text style={styles.left}>{title}</Text>
    <TouchableOpacity onPress={() => {}} />
  </View>
);

Header.prototype = {
  title: PropTypes.string.isRequired,
};
export default Header;
