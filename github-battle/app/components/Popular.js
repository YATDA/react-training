var React = require('react');
var Loading = require('./Loading');
var api = require('../utils/api');

var PropTypes = require('prop-types');

function RepoGrid(props) {
  return (
    <ul className="popular-list">
      {props.repos.map(function(repo, index) {
        return (
          <li key={repo.name} className="popular-item">
            <div className="popular-rank">
              #{index + 1}
            </div>
            <ul className="space-list-items">
              <li>
                <img
                  className="avatar"
                  src={repo.owner.avatar_url}
                  alt={'Avatar for ' + repo.owner.login}
                />
              </li>
              <li>
                <a href={repo.html_url}>
                  {repo.name}
                </a>
              </li>
              <li>
                @{repo.owner.login}
              </li>
              <li>
                {repo.stargazers_count} stars
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

function SelectLanguage(props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="languages">
      {languages.map(
        lang =>
          <li
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
            key={lang}
            onClick={props.onSelect.bind(null, lang)}>
            {lang}
          </li>,
        this,
      )}
    </ul>
  );
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.updateLanguage = this.updateLanguage.bind(this);
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    };
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState({selectedLanguage: lang});

    api.fetchPopularRepos(this.state.selectedLanguage).then(repos => {
      this.setState({repos});
    });
  }
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {this.state.repos ? <RepoGrid repos={this.state.repos} /> : <Loading />}
      </div>
    );
  }
}

module.exports = Popular;
