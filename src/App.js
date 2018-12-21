import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

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
        <h1 className="App-title"> &mdash;Markdown Previewer&mdash;</h1>
        <main className="App-content">
          <Card title="Editor">
            <Editor
              onChange={this.handleChange}
              markdownValue={markdownValue}
            />
          </Card>
          <Card title="Preview">
            <Preview markdownValue={markdownValue} />
          </Card>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
