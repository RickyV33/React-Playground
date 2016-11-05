import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <Button>React</Button>;
  }
}

class Button extends React.Component {
  render() {
    return <button>{this.props.children}</button>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

export default App;