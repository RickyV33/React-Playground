import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    let txt = this.props.txt;
    return <h1>{txt}</h1>;
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number
};
// const App = () => <h1>Hello from stateless function component!</h1>;

ReactDOM.render(
  <App txt="this is a props text" />,
  document.getElementById('app')
);

export default App;