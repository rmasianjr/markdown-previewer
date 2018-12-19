import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';

class App extends Component {
  state = {
    markdownValue: '# sample h1'
  };

  handleChange = e => {
    this.setState({
      markdownValue: e.target.value
    });
  };

  render() {
    const { markdownValue } = this.state;

    return (
      <div className="App">
        <h1>Markdown Previewer</h1>
        <main>
          <Editor onChange={this.handleChange} markdownValue={markdownValue} />
          <Preview markdownValue={markdownValue} />
        </main>
      </div>
    );
  }
}

export default App;
