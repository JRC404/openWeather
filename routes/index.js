const routes = require('express').Router();
const routeController = require('../controllers/routeController');

routes.get('/', routeController.getIndex);
routes.post('/', routeController.postIndex);

routes.get('/login', routeController.getLogin);

module.exports = routes;