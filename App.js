import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { txt: 'this is the state text' };
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  render() {
    return (
      <div>
        <input type = "text" onChange={this.update} />
        <h1>{this.state.txt}</h1>
      </div>
    );
  }
}

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// };
//
// App.defaultProps = {
//   txt: 'this is a default value',
//   cat: 100
// };
// const Stateless = () => <h1>Hello from stateless function component!</h1>;

ReactDOM.render(
  <App txt="this is a props text" />,
  document.getElementById('app')
);

export default App;