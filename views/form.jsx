var React = require('react');
var ReactRouter = require('react-router');
var ReactDOM = require('react-dom');
var DefaultLayout = require('./default');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
//var Link = window.ReactRouter.Link;



export default class AddPost extends React.Component {
    constructor(props) {
      super(props);
      this.addPost = this.addPost.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleSubjectChange = this.handleSubjectChange.bind(this);
      this.state = {
        title:'',
        subject:''
      };
    }

    
    componentDidMount() {
    this.setState({inBrowser: true});
  }
  //  componentDidMount(){
  //    document.getElementById('addHyperLink').className = "active";
  //    document.getElementById('homeHyperlink').className = "";
  //  }
    addPost(){
      axios.post('/addPost', {
        title: this.state.title,
        subject: this.state.subject
      })
      .then(function (response) {
        console.log('reponse from add post is ',response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    handleTitleChange(e){
      this.setState({title:e.target.value})
    }
    handleSubjectChange(e){
      this.setState({subject:e.target.value})
    }
    render() {
      return (<div className="form-style-5" id="app">
        <DefaultLayout title={this.props.title}></DefaultLayout>
           <form action="/addpost" onSubmit={ this.addpost } method="post">
           <fieldset>
           <legend><span className="number">1</span> Candidate Info</legend>
           <input type="text" onChange={this.handleTitleChange} className="form-control" id="title" name="title" placeholder="your name" required />
           <input type="text" name="field3" placeholder="Your Designation *"/>
           <input type="file" name="pic" accept="image/*" placeholder="Your Picture*"/>
           </fieldset>

           <fieldset>
           <legend><span className="number">2</span> Your Joke</legend>
           <textarea className="form-control" onChange={this.handleSubjectChange} type="textarea" id="subject" placeholder="Let's be creative...!" maxLength="140" rows="7"></textarea>
           </fieldset>

           <button type="submit" id="submit" name="submit" className="btn btn-primary pull-right">Submit</button>
           </form>
      </div>)
           

     

        //////////////////////////////////////////////////////////
       // <div className="col-md-5">
       //   <div className="form-area">  
       //       <form role="form">
       //         <br styles="clear:both" />
       //         <div className="form-group">
       //           <input type="text" onChange={this.handleTitleChange} className="form-control" id="title" name="title" placeholder="Title" required />
       //         </div>
               
       //         <div className="form-group">
       //           <textarea className="form-control" onChange={this.handleSubjectChange} type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
       //         </div>
                  
       //         <button type="button" onClick={this.addPost} id="submit" name="submit" className="btn btn-primary pull-right">Add Post</button>
       //       </form>
       //   </div>
       // </div>
    
    };
    
}
if(typeof window !== 'undefined') {
    ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={AddPost} path="/addPost"></Route>
    </Router>,
document.getElementById('app'));
}


/////////////////////////////////////


