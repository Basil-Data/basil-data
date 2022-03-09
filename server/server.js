const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const sectionTwoRouter = require('./routes/sectionTwo.router');
const section1Router = require('./routes/section1.router');
const section3Router = require('./routes/section3.router');
const section6Router = require('./routes/section6.router');
const section7Router = require('./routes/section7.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/sectionTwo', sectionTwoRouter);
app.use('/api/section1', section1Router);
app.use('/api/section3', section3Router);
app.use('/api/section6', section6Router);
app.use('/api/section7', section7Router);

// Serve static files
app.use(express.static('build'));


// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
