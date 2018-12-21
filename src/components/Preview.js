import React from 'react';
import marked from 'marked';
import PropTypes from 'prop-types';

const Preview = ({ markdownValue }) => (
  <div
    id="preview"
    dangerouslySetInnerHTML={{ __html: marked(markdownValue) }}
  />
);

Preview.propTypes = {
  markdownValue: PropTypes.string.isRequired
};

export default Preview;
