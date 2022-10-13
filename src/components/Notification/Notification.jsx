import React from 'react';
import { MessageText } from './Notification-styled';

export default function Notification({ message }) {
  return <MessageText>{message}</MessageText>;
}
