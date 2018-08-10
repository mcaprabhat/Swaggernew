var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');
var users = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

app.get('/', routes.index);
app.get('/users', users.list);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});

/*
 * ## Swagger - setup
 */

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
});

var swagger = require('swagger-node-express').createNew(app);

swagger.setAppHandler(app);

// This is a sample validator. It simply says that for _all_ POST, DELETE, PUT
// methods, the header `api_key` OR query param `api_key` must be equal
// to the string literal `special-key`. All other HTTP ops are A-OK
//swagger.addValidator(
//    function validate(req, path, httpMethod) {
//        // example, only allow POST for api_key="special-key"
//        if ("POST" == httpMethod || "DELETE" == httpMethod || "PUT" == httpMethod) {
//            var apiKey = req.headers["api_key"];
//            if (!apiKey) {
//                apiKey = url.parse(req.url,true).query["api_key"]; }
//            if ("special-key" == apiKey) {
//                return true;
//            }
//            return false;
//        }
//        return true;
//    }
//);

var models = require("./specs/models.js");

var authorizationsResources     = require("./specs/authorizations.js");
var poolData     = require("./specs/datapool.js");

// Add models and methods to swagger
swagger.addModels(models)
   // .addGet(authorizationsResources.getAuthorizations)
    .addGet(poolData.getDataPool)
//swagger.configureDeclaration("pet", {
//    description : "Operations about Pets",
//    authorizations : [],
//    produces: ["application/json"]
//});

// set api info
swagger.setApiInfo({
    title: "Start- HTTP webservices specification",
    "description": "<p>Start has heavy use of JavaScripts (JS). Single Page Application (SPA) approach is the architectural approach to improve the user experience (UX).</p>",
    termsOfServiceUrl: "",
    contact: "subash.rout@capgemini.com",
    license: "",
    licenseUrl: ""
});

//swagger.setAuthorizations({
//    apiKey: {
//        type: "apiKey",
//        passAs: "header"
//    }
//});

// Configures the app's base path and api version.
swagger.configureSwaggerPaths("", "api-docs", "");
swagger.configure("http://localhost:3000", "1.0.0");

// Serve up swagger ui at /docs via static route
var docs_handler = express.static(__dirname + '/ui/');
app.get(/^\/docs(\/.*)?$/, function(req, res, next) {
    if (req.url === '/docs') { // express static barfs on root url w/o trailing slash
        res.writeHead(302, { 'Location' : req.url + '/' });
        res.end();
        return;
    }
    // take off leading /docs so that connect locates file correctly
    req.url = req.url.substr('/docs'.length);
    return docs_handler(req, res, next);
});


module.exports = app;
