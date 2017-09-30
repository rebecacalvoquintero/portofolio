const projects = require('../model/index');

exports.get = (req, res) => {
  res.render('projects', { activePage: { projects: true }, projects });
};
