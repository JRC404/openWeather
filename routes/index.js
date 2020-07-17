const routes = require('express').Router();
const routeController = require('../controllers/routeController');

routes.get('/', routeController.getIndex);

module.exports = routes;