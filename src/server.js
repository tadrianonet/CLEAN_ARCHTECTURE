
const express = require('express');
const bodyParser = require('body-parser');

const UserController = require('./interface-adapters/controllers/UserController');
const healthController = require('./interface-adapters/controllers/HealthController'); 
const errorHandler = require('./interface-adapters/middleware/errorHandler');
const requestLogger = require('./interface-adapters/middleware/requestLogger');
//const auth = require('./interface-adapters/middleware/auth');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(requestLogger);
//app.use(auth);

const userController = new UserController();

app.post('/users', (req, res) => userController.create(req, res));
app.get('/users', (req, res) => userController.findAll(req, res));

app.use('/', healthController);


app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
