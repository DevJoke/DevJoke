var React = require('react');
var DefaultLayout = require('./default');

var Stories = React.createClass({
  render: function() {
    var stories = this.props.stories.map(function(joke) {
      return (
        <div key={joke.handle} className={(joke.double) ? 'grid-item Story Story--width2' : 'grid-item Story'}>
          <div className="Story-Title">
            <h4 className="Story-Title--FullName">
              {joke.fullName}
            </h4>
          </div>
          <div className="Story-Title--Handle">
            <a target="_blank" href={joke.website}>@{joke.handle}</a>
            <span> </span>
            (<span className="Story-Bio">{joke.bio}</span>)
            <span> </span>
          </div>
          <a href={'/joke/' + joke.handle}>
            <img className="Story-Profile" alt={joke.handle} src={"/img/" + joke.avatar} />
          </a>
          <p>{joke.story}</p>
        </div>
      )
    });

    return (
      <DefaultLayout title={this.props.title}>{stories}</DefaultLayout>
    )
  }
});

module.exports = Stories;
