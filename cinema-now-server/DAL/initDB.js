const DAL = require('./DAL');
const mongoose = DAL.getConnection();


const initDB = () => {
  mongoose.connect('mongodb://database/mean-docker', { useNewUrlParser: true })
  .then(res => {
    console.log('Connection succeeded');
    // create mongoose model
    const Halls = DAL.getHallsModel();
    //
    Halls.find().exec().then((halls) => {
      if (halls.length == 0) {
        Halls.insertMany([{
          name: "Hall 100"
        },
        {
          name: "Hall 200"
        },
        {
          name: "Hall 300"
        }]);
      }
    }, (err) => console.log('Error in find halls: ', err));
  })
  .catch(error => console.log('Error in connect ', error));
}

module.exports = initDB;