const mongoose = require('mongoose');


const initDB = () => {
  mongoose.connect('mongodb://localhost:27017/mean-docker', { useNewUrlParser: true })
  .then(res => {
    console.log('Connection succeeded');
    const hallSchema = new mongoose.Schema({
      name: String
    });
    // create mongoose model
    const Halls = mongoose.model('Halls', hallSchema);
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