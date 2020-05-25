import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import styles from './component.style';

export default function Status(props) {
  const { status } = props;

  if (status === 'work') {
    return (
      <Text style={styles.statusLine}>{"It's time to work!"}</Text>
    );
  }

  if (status === 'stoppedWork') {
    return (
      <Text style={styles.statusLine}>Work paused</Text>
    );
  }

  if (status === 'break') {
    return (
      <Text style={styles.statusLine}>{"Break time!"}</Text>
    );
  }

  if (status === 'stoppedBreak') {
    return (
      <Text style={styles.statusLine}>Break paused</Text>
    );
  }
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
};
