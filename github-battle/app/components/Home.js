var React = require('react');
var {Component} = React;
var {Link} = require('react-router-dom');

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Github Battle: Battle your friends.... and stuff</h1>
        <Link className="button" to="/battle">
          Battle
        </Link>
      </div>
    );
  }
}

module.exports = Home;
