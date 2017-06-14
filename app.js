
/**
 * Module dependencies
 */
var express         = require('express'),
  bodyParser        = require('body-parser'),
  methodOverride    = require('method-override'),
  errorHandler      = require('express-error-handler'),
  morgan            = require('morgan'),
  http              = require('http'),
  path              = require('path'),
  mongo             = require('mongodb'),
  fs                = require('fs');

var app = module.exports = express();

// API Config
var apiConfig = JSON.parse(fs.readFileSync('./ApiConfig.json', 'utf8'));

// Mongo DB setup
var mongo           = require('mongodb');
var monk            = require('monk');
var db              = monk(apiConfig.database_url);

/**
 * Configuration
 */
// All environments
app.set('port', process.env.PORT || 3030);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// Development only
if (env === 'development') {
  app.use(errorHandler());
}

// Production only
if (env === 'production') {
  // TODO
}

/**
 * Routes
 */
// Database route connection
app.use(function(req, res, next) {
    req.db = db;
    next();
});

// API routes
app.use('/api/post', require('./routes/BlogPostApi'));
// more routes here ...

/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
