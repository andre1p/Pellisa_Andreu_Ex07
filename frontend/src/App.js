import React, { Component } from 'react';
import Chat from "./components/Chat";
import './components/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Chat />
      </div>
    );
  }
}

export default App;
