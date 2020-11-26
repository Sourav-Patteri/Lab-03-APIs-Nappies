const People = require('../models/person');

exports.documentation = (req, res) => {
    res.status(200).json([
      {
        path: '/people',
        description: 'returns an array of 4 people objects. Each object has a unique ID, their name, age, and one other attribute of your choosing'
      },
      {
        path: '/people/:id',
        description: 'returns a person with the passed ID'
      },
      {
        path: '/api/people',
        description: 'returns an array of 4 users from the Github users api. Each user has various attributes'
      },
      {
        path: '/api/people/:id',
        description: 'returns a user from the Github api with the passed ID'
      }
    ]);
  };

exports.index = async (req, res, next) => {
    try {

      const people = await People.find();
      // console.log(people);
      res.status(200).json(people);
      // res.render('people', people); // was trying to render the array of the 4 objects into the same format as in show using view but couldn't get it to work.
    } catch (error) {
        next(error);
    }
};

exports.show = async (req, res, next) => {
    try {
        const person = await People.findById(req.params.id);
        res.render('people', person);
    } catch (error) {
        next(error);
    }
};

exports.allPeople = async (req, res, next) => {
  try {
      const people = await People.findpeople();
      res.status(200).json(people);
  } catch (error) {
      next(error);
  }
};

exports.person = async (req, res, next) => {
  try {
      const person = await People.findPersonById(req.params.id);
      res.status(200).json(person);
  } catch (error) {
      next(error);
  }
};