const axios = require('axios');
const BASEPATH = 'https://api.github.com';

exports.find = async () => {
  const path = `${BASEPATH}/users?per_page=4`;

  const { data } = await axios(path);
  return data;
};

exports.findById = async id => {
   const path = `${BASEPATH}/user/${id}`;
 
   const { data } = await axios(path);
   return data;
 }
 
 let people = [
  {
     id: 1,
     name: "Tyler Durden",
     age: 45,
     quote: "It’s only after we’ve lost everything that we’re free to do anything."
  },
  {
     id: 2,
     name: "Dumbledore",
     age: 150,
     quote: "It is not our abilities that show what we truly are… it is our choices."
  },
  {
     id: 3,
     name: "Adonis",
     age: 34,
     quote: "If we didn’t do what we loved, we wouldn’t exist"
  },
  {
     id: 4,
     name: "Don Vito Corleone",
     age: 67,
     quote: "I'm gonna make him an offer he can't refuse"
  }
];

exports.findpeople = () => {
  return people;
 };
 
 exports.findPersonById = (id) => {
    for (let person of people){
       if (person.id == id){
          return person;
       }
    }
 }