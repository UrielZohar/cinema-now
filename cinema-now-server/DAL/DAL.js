// getting-started.js
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost/test', 
  {useNewUrlParser: true, useUnifiedTopology: true}
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const kittySchema = new mongoose.Schema({
  name: String
});
const Kitten = mongoose.model('Kitten', kittySchema);
const fluffy = new Kitten({ name: 'fluffy' });
console.log(silence.name); // 'Silence'

const dbActions = {
  saveKitty: () => {
    
  }
}

module.exports = dbActions;