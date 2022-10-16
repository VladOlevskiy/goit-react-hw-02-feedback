import React from 'react';
import { ListButton, ListItemButton, Button } from './FeedbackOptions-styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ foo, stateKeys }) {
  return (
    <ListButton>
      {stateKeys.map(stateKey => (
        <ListItemButton key={stateKey}>
          <Button key={stateKey} type="button" name={stateKey} onClick={foo}>
            {stateKey}
          </Button>
        </ListItemButton>
      ))}
    </ListButton>
  );
}

FeedbackOptions.propTypes = {
  foo: PropTypes.func.isRequired,
  stateKeys: PropTypes.array.isRequired,
};
