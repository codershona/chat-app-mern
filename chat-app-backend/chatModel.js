// Creating the database models
import mongoose from 'mongoose';

const chatSchema = mongoose.Schema({
  username: String,
  message: String, 
  timestamp: String, 
});

export default mongoose.model('messages', chatSchema);
