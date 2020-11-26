const { documentation, index, show , allPeople, person} = require('../controllers/people');

module.exports = router => {
  router.get('/', documentation);
  router.get('/documentation', documentation);
  router.get('/api/people', index);
  router.get('/api/people/:id', show);
  router.get('/people', allPeople);
  router.get('/people/:id', person);
  return router;
};
