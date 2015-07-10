
// Set up a collection to contain player information. On the server,
// it is backed by a MongoDB collection named "players".

  Template.drawingList.helpers({
    players: function () {
      return Players.find();
    },
    selectedName: function () {
      var player = Players.findOne(Session.get("selectedPlayer"));
      return player && player.name;
    }
  });

Template.drawingList.events({
    'click .inc': function () {
      //Players.update(Session.get("selectedPlayer"), {$inc: {score: 5}});
    }


  });

/*


 <li class="player {{selected}}">
    <div class="name" >{{name}}</div>
    <div class="name" >{{drawingNo}}</div>
    <div class="score" >{{score}}</div>
  </li>
</template>

  <ul class="drawingList" >
    {{#each players}}
      {{> player}}
    {{/each}}
  </ul>
*/
