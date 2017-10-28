var React = require('react');
var ReactRouter = require('react-router');
var ReactDOM = require('react-dom');
var DefaultLayout = require('./default');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
//var Link = window.ReactRouter.Link;

export default class ShowPost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        posts:[]
      };
    }

    

    componentDidMount(){
      var self = this;
      console.log("I compo it");
 
      axios.post('/getPost', {
        
      
      })
      .then(function (response) {
        self.setState({posts:response.data})
        
      })
      .catch(function (error) {
        console.log('error is ',error);
      });
    }

  render() {
     //console.log(post);
    var stories=  this.state.posts.map(function(post,index) {
     // console.log(post.fullName);
      return (
                <div key={index} className={(index.double) ? 'grid-item Story Story--width2' : 'grid-item Story'} id="app">
          <div className="Story-Title">
            <h4 className="Story-Title--FullName">
              
              {post.title}
            </h4>
          </div>
          <p>{post.subject}</p>
        </div>
      )
    });

    return (
      <DefaultLayout title={this.props.title}>{stories}</DefaultLayout>
    )
  };

    ///////////////////////////////////////////////////////////
    
}
   
  if(typeof window !== 'undefined') {
    ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={ShowPost} path="/getPost"></Route>
    </Router>,
document.getElementById('app'));
}

/////////////////////////////////////////////////////////////////////////////////////////////
