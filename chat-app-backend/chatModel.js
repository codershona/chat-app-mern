// Creating the database models
import mongoose from 'mongoose';

const chatSchema = mongoose.Schema({
  userAccount: String,
  postMessage: String, 
  timestamp: String, 
});

export default mongoose.model('messagecontents', chatSchema);
