module.exports = function(app) {
  const videos = require('../controller/controller.video.js');

  // CRUD ~ Create Read Update Delete

  // Post | Create a new videos
  app.post('/api/video',videos.create);

  // Get | Read/ Retrieves all videos
  app.get('/api/video',videos.findAll);

  // Get | Read/ Retrieves a specific video - by ID
  app.get('/api/video/:videoId',videos.findById);

  // Get | Read/ Retrieves a specific video - by rating
  // app.get('/api/videos/rating/:rating',videos.findByRating);
  app.get('/api/videos/age/:age',videos.findByAge);

  // Put | Update a specific video - by ID
  app.put('/api/video/:videoId', videos.update );

  // Delete a specific video - by ID
  app.delete('/api/video/:videoId', videos.delete );

}
