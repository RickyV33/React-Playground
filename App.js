import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.input).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.input).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.input).value
    });
  }
  render() {
    return (
      <div>
        Red
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <hr />
        Green
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <hr />
        Blue
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
      </div>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
        <input ref="input"
               type = "range"
               min="0"
               max="255"
               onChange={this.props.update} />
      </div>
    );
  }
}

// const Widget = (props) => {
//   return (
//     <div>
//       <input type = "text" onChange={props.update} />
//       <h1>{props.txt}</h1>
//     </div>
//   );
// };

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