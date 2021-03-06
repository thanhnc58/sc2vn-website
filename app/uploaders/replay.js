var config = require('../../config/config');
var cloudinary = require('cloudinary');

cloudinary.config(config.cloudinary);

exports.upload = function(game, file){
  options = { public_id: 'games/' + game._id };

  cloudinary.uploader.upload(file.path, function(replay) {
    game.replay = replay.url;
  }, options);
}
