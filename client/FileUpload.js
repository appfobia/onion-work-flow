// On server startup, create some players if the database is empty.
Uploads = new FS.Collection('uploadsC',{
  stores: [ new FS.Store.FileSystem('uploads')]
});


Meteor.subscribe('uploadsC');


Template.FileUpload.helpers({
  uploads: function() {
    return Uploads.find();
  }
});

Template.FileUpload.events({
  'change .fileInput': function(event,template) {
    //var cprev= Uploads.Collection.count();
    FS.Utility.eachFile(event,function(file){
      var fileObj = new FS.File(file);
      Uploads.insert(fileObj,function(err){
        console.log(err);
      });
});
}
});
