var React = require('react');
var Battle = require('./Battle');
var Home = require('./Home');
var Nav = require('./Nav');
var Popular = require('./Popular');
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
            <Route path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            {/*<Route render={() => <p>Not Found</p>} />*/}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

module.exports = App;
