import { Component } from 'react';
import Feedback from './Feedback/Feedback';

export default class App extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Feedback state={this.state} />
      </div>
    );
  }
}
