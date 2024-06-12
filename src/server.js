
const express = require('express');
const bodyParser = require('body-parser');

const UserController = require('./interface-adapters/controllers/UserController');
const HealthController = require('./interface-adapters/controllers/HealthController'); 
const errorHandler = require('./interface-adapters/middleware/errorHandler');
const requestLogger = require('./interface-adapters/middleware/requestLogger');
//const auth = require('./interface-adapters/middleware/auth');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(requestLogger);
//app.use(auth);

const userController = new UserController();
const healthController = new HealthController();

app.post('/users', (req, res) => userController.create(req, res));
app.get('/users', (req, res) => userController.findAll(req, res));

app.get('/health', (req, res) => healthController.healthCheck(req, res));


app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
