const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    console.log(`Here ${req.body}`);
    db.Book.find(req.query)
      .sort({
        date: -1
      })
      .then(result => res.json(result))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err));
  },
  create: function(req, res) {
    console.log(`Here ${JSON.stringify(req.body, null, 2)}`);
    var query = req.body;
    var options = { upsert: true, new: true, setDefaultOninsert: true };
    db.Book.create(req.body)
      .then(result => {
        console.log(result);
        res.send(result);
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  update: function(req, res) {
    db.Book.findOneAndUpdate(
      {
        _id: req.params.id
      },
      req.body
    )
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err));
  },
  delete: function(req, res) {
    db.Book.findOneAndDelete({
      _id: req.params.id
    })
      .then(result => result.remove())
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err));
  }
};
