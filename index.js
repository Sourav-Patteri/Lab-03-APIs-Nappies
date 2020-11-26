console.clear();

// Setup the app
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// Setup the view engine
const jsonViewEngine = require('./jsonViewEngine');
app.engine('json', jsonViewEngine);
app.set('views', './views');
app.set('view engine', 'json');

// register the routes
const routes = require('./routes');
const router = routes(express.Router());
app.use(router);

// error handling
const { handle404s, errorHandler } = require('./errorHandling');
app.use(handle404s);
app.use(errorHandler);


app.listen(4000, () => console.log("Always watching... on port 4000"));
