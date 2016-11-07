import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {val: 0};
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({val: this.state.val + 1});
  }

  componentWillMount() {
    console.log('mounting');
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentWillUnmount() {
    console.log('bye!');
  }

  render() {
    console.log('rendering!');
    return <button onClick={this.update}>{this.state.val}</button>;
  }
}

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.mount = this.mount.bind(this);
    this.unmount = this.unmount.bind(this);
  }

  mount() {
    ReactDOM.render(<App />, document.getElementById('a'));
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }

  render() {
    return (
      <div>
        <button onClick={this.mount}>mount!</button>
        <button onClick={this.unmount}>unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}


ReactDOM.render(
  <Wrapper />,
  document.getElementById('app')
);

