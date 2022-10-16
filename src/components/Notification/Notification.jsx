import React from 'react';
import { MessageText } from './Notification-styled';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <MessageText>{message}</MessageText>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
