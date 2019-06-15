const bodyParser = require('body-parser');
const express = require('express');
const path = require("path");
const config = require("./config");
const app = express();
const http = require('http');
const passport = require("passport");
const AppleStrategy = require("passport-appleid").Strategy;

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());

passport.use(new AppleStrategy({
    clientID: config.client_id,
    callbackURL: config.redirect_uri,
    teamId: config.team_id,
    keyIdentifier: config.key_identifier,
    privateKeyPath: path.join(__dirname, "./AuthKey_RBXXXXXXXX.p8")
  },
  function(accessToken, refreshToken, profile, done) {
    let user = profile;
    return done(null, user);
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.use(require('express-session')({ secret: 'apple cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.get('/auth/apple', passport.authenticate('apple', {scope: "email"}));

app.get('/auth/apple/callback', passport.authenticate('apple', { failureRedirect: '/login' }), function(req, res) {
  res.redirect('/');
});

app.get("/login", function(req, res){
  res.render("./login")
});

app.get("/", function(req, res){
  if (!req.user) return res.redirect("/login")
  res.json(req.user);
});

app.use((req, res, next) => { res.sendStatus(404) })
app.use((err, req, res, next) => { 
  console.log(err)
  res.sendStatus(err.status || 500) 
})

app.set('port', 3001);

var server = http.createServer(app);
server.listen(3001);