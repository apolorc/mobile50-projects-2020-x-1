import React from 'react';
import PropTypes from 'prop-types';
import { leftPad } from './utils';
import {Text} from 'react-native';

export default function Time(props) {
  const minutes = Math.floor(props.time / 60);
  const seconds = leftPad(props.time % 60);

  return (
    <Text>
      {minutes}:{seconds}
    </Text>
  );
}

Time.propTypes = {
  time: PropTypes.number.isRequired,
};