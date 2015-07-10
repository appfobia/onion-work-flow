Meteor.publish('players', function() {
  return Players.find();
});
Meteor.publish('uploadsC', function() {
  return Uploads.find({},{limit:0});
});
