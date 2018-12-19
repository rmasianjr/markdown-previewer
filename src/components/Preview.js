import React from 'react';
import marked from 'marked';

const Preview = ({ markdownValue }) => (
  <div
    id="preview"
    dangerouslySetInnerHTML={{ __html: marked(markdownValue) }}
  />
);

export default Preview;
