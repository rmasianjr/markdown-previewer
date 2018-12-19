import React from 'react';

const Editor = ({ onChange, markdownValue }) => (
  <textarea id="editor" value={markdownValue} onChange={onChange} />
);

export default Editor;
