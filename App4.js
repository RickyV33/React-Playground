import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {increasing: false}
  }

  update() {
    ReactDOM.render(
      <App val={this.props.val+1} />,
      document.getElementById('app')
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
  }

  render() {
    console.log(this.state.increasing);
    return (
      <button onClick={this.update}>
        {this.props.val}
      </button>
    )
  }
}

App.defaultProps = { val: 0};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

