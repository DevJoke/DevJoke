var React = require('react');

var form = React.createClass({
  render: function() {
    var githubStyle = {
      fill: "#151513",
      color: "#fff",
      position: "fixed",
      top: 0,
      border: 0,
      right: 0,
      zIndex: 10
    };
    var githubStyle2 = {
      transformOrigin: "130px 106px"
    };
    return (
           <html>
           <head>
             <link rel="stylesheet" type="text/css" href="/css/form.css"></link>
           </head>
           <body>
           <div className="form-style-5">
           <form>
           <fieldset>
           <legend><span className="number">1</span> Candidate Info</legend>
           <input type="text" name="field1" placeholder="Your Name *"/>
           <input type="email" name="field2" placeholder="Your Email *"/>
           <input type="text" name="field3" placeholder="Your Designation *"/>
           <input type="file" name="pic" accept="image/*" placeholder="Your Picture*"/>
           </fieldset>

           <fieldset>
           <legend><span className="number">2</span> Your Joke</legend>
           <textarea name="field3" placeholder="Let's be creative...!"></textarea>
           </fieldset>

           <input type="submit" value="Submit" />
           </form>
           </div>
           </body>
           </html>
    );
  }
});

module.exports = form;
