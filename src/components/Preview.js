import React from 'react';
import marked from 'marked';
import PropTypes from 'prop-types';

const Preview = ({ markdownValue }) => {
  const renderer = new marked.Renderer();
  renderer.link = function(href, title, text) {
    return `<a target="_blank" href=${href}>${text}</a>`;
  };

  marked.setOptions({
    breaks: true
  });

  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{ __html: marked(markdownValue, { renderer }) }}
    />
  );
};

Preview.propTypes = {
  markdownValue: PropTypes.string.isRequired
};

export default Preview;
