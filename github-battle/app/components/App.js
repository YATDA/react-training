var React = require('react');
var Battle = require('./Battle');
var Home = require('./Home');
var Nav = require('./Nav');
var Popular = require('./Popular');
var Results = require('./Results');
var ReactRouter = require('react-router-dom');
var {Route, BrowserRouter, Switch} = ReactRouter;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/battle" exact component={Battle} />
            <Route path="/battle/results" component={Battle} />
            <Route path="/popular" exact component={Popular} />
            <Route
              render={function() {
                return <p>Not Found</p>;
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

module.exports = App;
