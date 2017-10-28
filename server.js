var fs = require('fs');
var express = require('express');
var app = express();
var RSS = require('rss');
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//database information
var post = require('./post');

// Public directory for all static assets
app.use(express.static(__dirname + '/public'));

// Set views and jsx for view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function(req, res) {
//const data = readData();
//  res.render('index', { title: "They Rejected Us.", stories: data.stories.reverse() });
res.render('index');
})



//sending information
app.post('/addpost', function (req, res) {
  if (res.status === 500) {
  return res.json() // return the result of the inner promise, which is an error
  .then((json) => {
    const { message, stackTrace } = json;
    throw new ServerException(message, stackTrace);
  });
} else {
  var title = req.body.title;
  var subject = req.body.subject;
  post.addPost(title, subject ,function(result){
    res.redirect('/');
  });
}
  
})

//retreiven information
app.get('/getPost', function (req, res) {
  post.getPost(function(result){
    res.send(result);
  });
})

//app.get('/feed.xml', function(req, res) {
//  const data = readData();
//  const feed = createFeed(data);
//  res.set('Content-Type', 'application/rss+xml');

//  res.send(feed.xml());
//});

//app.get('/story/:handle', function(req, res) {
//  const data = readData();
//  const myStories = data.stories.filter(function(element) {
//    return element.handle === req.params.handle;
//  });
//  res.render('index', { title: "They Rejected Us.", stories: myStories });
//});

app.get('/form', function(req, res) {
  //const data = readData();

  res.render('form');
});

//app.post('/form', function(req, res) {
  // Your logic and then redirect
//  res.redirect('/');
//});

// rss rendering
//function createFeed(data) {
//  var feed = new RSS({
//    title: 'rejected.us',
//    description: 'They Rejected Us. Everyone’s been rejected - these are our stories',
    //feed_url: 'http://rejected.us/feed.xml',
    //site_url: 'http://rejected.us',
  //  language: 'en',
    //pubDate: Date.now(),
    //ttl: '60'
  //});

  //data.stories.forEach(function(story){
  //  feed.item({
  //    title:  story.fullName + " - " + story.bio,
   //   description: story.story,
     // url: '',
   //   author: story.fullName,
   //   date: Date.now()
 //   });
  //});

//  return feed;
//}

//function readData() {
//  return JSON.parse(fs.readFileSync('data/data.json', 'utf8'));
//}
var port = process.env.PORT || 8080;

var server = app.listen(port, function () {
  console.log('Listening at http://localhost:8080/');
});
