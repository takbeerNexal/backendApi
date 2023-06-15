import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  id: String,
  title: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostTodo", postSchema);

export default PostMessage;
