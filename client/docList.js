
// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

  Template.docList.helpers({
    players: function () {
      return Players.find();
    },
    selectedName: function () {
      var player = Players.findOne(Session.get("selectedPlayer"));
      return player && player.name;
    }
  });

Template.docList.events({
    'click .inc': function () {
      //Players.update(Session.get("selectedPlayer"), {$inc: {score: 5}});
    }


  });
