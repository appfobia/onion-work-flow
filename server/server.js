Uploads = new FS.Collection('uploadsC',{
  stores: [ new FS.Store.FileSystem('uploads',{path:'~/drawingUploads'})]
});

  Meteor.startup(function () {
    if (Players.find().count() === 0) {

      var names = ["Assembly Piping Area For Paradip Tank Area", "Assembly piping Area For F/W Network & Foam Line At Paradip Tank Farm Area",
                   "General Layout Plan For Paradip Tank Farm Cum Pump Station (Showing overall Layout)", "General Layout Plan For Paradip Tank Farm Cum Pump Station (Showing Booster MLPU Shed and FCV Under PHBPL Aug PJ)",
                   "General Layout Plan For Paradip Tank Farm Cum Pump Station (Showing 5 Nos. Crude Oil Tanks Under PHBPL AUG PJ)"];

     /* _.each(names, function (name) {
        Players.insert({
          name: name
        });
      });
     */

       var drawingNO = ["9200-06001-402-101-04 PHBPL AUG-235-04(SHEET 1 TO 9)", "9200-06001-402-251-01 PHBPL AUG-317-01(SHEET 1 TO 14)", "9200-06001-402-001-03 (SHEET 1 OF 3)",
       "9200-06001-402-001-04 (SHEET 2 OF 3)",    "9200-06001-402-001-03 (SHEET 3 OF 3)"]

    /*
      _.each(drawingNO, function (num) {
        Players.insert({
          drawingNo: num
        });
      });
     */

      var revisionArr = ["REV 04", "REV 01","REV 03","REV 04","REV 03"]

     /* _.each(revisionArr, function (rev) {
        Players.insert({
          score: rev
        });
      });
      */

      var count=0;
      while(count<drawingNO.length)
      {
        Players.insert({
                        name: names[count],
                        drawingNo: drawingNO[count],
                        score: revisionArr[count]
        });
        count++;
      }

    }



  });
