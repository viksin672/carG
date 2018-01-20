var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   description1:String,
   image1: String,
   image2: String,
   image3: String,
   image4: String,
   image5: String,
   image6: String,
   image7: String,
   image8: String,
   image9: String,
   type : String,
   displacement : String,
   borexstroke : String,
   compression : String,
   maxpower : String,
   maxtorque : String,
   transmissiontype : String,
   gearbox : String,
   maxspeed :  String,
   acceleration : String,
   rimf : String,
   rimr : String,
   tiref : String,
   tirer : String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports = mongoose.model("Campground", campgroundSchema);
