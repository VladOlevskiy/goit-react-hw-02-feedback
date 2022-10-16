import React from 'react';
import { Title, SectionEl } from './Section-styled';
import PropTypes from 'prop-types';

export default function Section({ text, children }) {
  return (
    <SectionEl>
      <Title>{text}</Title>
      {children}
    </SectionEl>
  );
}

Section.propTypes = {
  text: PropTypes.string,
};
