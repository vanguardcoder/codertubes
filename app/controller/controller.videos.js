const db = require('../config/db.config.js' );
const Video = db.videos;

// Post | Create a video
exports.create  = (req, res) => {
  // Save to DB
  Video.create({
    name: req.body.name,
    age:  req.body.age
  }).then(video => {
    // Send newly created video to front-end client
    res.send(video);
  } ).catch(err => {
    res.status(500).send("Error -> " + err );
  })
};

// Fetch | Get | Read | Retrieve a video
// fetch ALL videos
exports.findAll = (req, res) => {
  Video.findAll().then(videos => {
    // send all videos to the front-end client
    res.send(videos);
  } ).catch(err => {
    res.status(500).send("Error -> " + err);
  } )
};
// fetch specific video by ID
exports.findById = (req, res) => {
  Video.findById(req.params.customerId).then(video => {
    res.send(video);
    } ).catch( err => {res.status(500).send("Error -> " + err);
  } )
};
// fetch | find by age
exports.findByAge = (req, res) => {
  Video.findAll({
    where: { age: req.params.age }
  }).then(videos => {
    res.send(videos)
  }).catch(err => {
    res.status(500).send("Error -> " + err);
  } )
};


// Put | Update a video
exports.update = (req, res) => {
  var video = req.body;
  const id = req.params.videoId;
  Video.update(
    {
      name:   req.body.name,
      age:    req.body.age,
      active: req.body.active
    },
    {where: {id: req.params.videoId} }
  ).then(() => {
    res.status(200).send(video);
  } ).catch(err => {
    res.status(500).send("Error -> " + err);
  } )
};

// Delete a video
exports.delete = (req, res) => {
  const id = req.params.videoId;
  Video.destroy({
    where: {id: id}
  }).then(() => {
    res.status(200).send('Video has now been deleted.');
  } ).catch(err => {
    res.status(500).send("Error -> " + err);
  } );
};
