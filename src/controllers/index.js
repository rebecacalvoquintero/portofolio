const express = require('express');
const path = require('path');
const router = express.Router();

// import home route controller
const home = require('./home');
const myProjects = require('./myProjects');
const aboutMe = require('./aboutMe');
const error = require('./error');

// add home route
router.get('/', home.get);
router.get('/fruits', myProjects.get);
router.get('/aboutMe', aboutMe.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
