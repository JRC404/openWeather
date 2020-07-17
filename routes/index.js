const routes = require('express').Router();
const routeController = require('../controllers/routeController');

routes.get('/', routeController.getIndex);
routes.post('/', routeController.postIndex);

module.exports = routes;