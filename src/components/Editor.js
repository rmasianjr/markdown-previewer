import React from 'react';
import PropTypes from 'prop-types';

const Editor = ({ onChange, markdownValue }) => (
  <textarea id="editor" value={markdownValue} onChange={onChange} />
);

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  markdownValue: PropTypes.string.isRequired
};

export default Editor;
