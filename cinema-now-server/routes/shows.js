var express = require('express');
var DAL = require('../DAL/DAL');

var router = express.Router();
const Show = DAL.getShowModel();
const ObjectId = require('mongoose').Types.ObjectId; 


/* POST save/update show */
router.post('/save', (req, res) => {
  const { show } = req.body;
  let newShow;
  if (!show._id) {
    newShow = new Show(show);
  }
  if (show._id) {
    Show.findOneAndUpdate(
      {_id: ObjectId(show._id)}, 
      show,
      {new: true})
      .then((result) => {
        if (result) {
          res.send(show);
        }
      })
      .catch(err => {
        res.status(500).send('Something broke');
      });
  } else {
    newShow.save((error) => {
      if (error) {
        res.status(500).send('Something broke');
      } else {
        res.send("saved");
      }
    });
  }
});

/* GET all local movies */ 
router.get('/', (req, res, next) => {
  Show.find({}).exec().then((allShows) => {
    res.send(allShows);
  }, () => res.status(500).send('Something broke') )
});

/* GET delete */
router.get('/:id/delete', (req, res) => {
  const { id } = req.params;
  Show.deleteOne({ _id: new ObjectId(id) }).then((result) => {
    if (result.deletedCount) {
      res.send("deleted");
    } else {
      res.status(500).send('Something broke');
    }
  }, () => res.status(500).send('Something broke'));
});

module.exports = router;
