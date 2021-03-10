require('dotenv').config();
const { DB_USER } = process.env; 
const { DB_PASSWORD } = process.env; 
const DAL = require('./DAL');
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cinema-now.mdegl.mongodb.net/mean-docker?retryWrites=true&w=majority`;

const mongoose = DAL.getConnection();


const initDB = () => {
  mongoose.connect(uri, { useNewUrlParser: true })
  .then(res => {
    console.log('Connection succeeded');
    // create mongoose model
    const Halls = DAL.getHallsModel();
    //
    Halls.find({}).exec().then((halls) => {
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