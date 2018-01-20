var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    User        = require("./models/user"),
    flash       = require("connect-flash"),
  commentRoutes    = require("./routes/comments"),
  campgroundRoutes = require("./routes/garage"),
  indexRoutes      = require("./routes/index");
var seedDB     = require("./seeds");
   mongoose.Promise = global.Promise;
//requiring routes

seedDB();
// mongoose.connect("mongodb://localhost/carg", {useMongoClient: true});
mongoose.connect("mongodb://<vivek>:<viveksingh1!>@ds111078.mlab.com:11078/carg", {useMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());


// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);



app.listen(3000,function() {
  console.log("YelpCamp server started!!")
});
