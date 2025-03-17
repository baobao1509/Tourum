import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: [String],
    default: [],
  },
  content: {
    type: [String],
    default: [],
  },
  imageUrl: {
    type: [String],
    default: [],
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  likesCount: {
    type: Number,
    default: 0,
  },
  commentsCount: {
    type: Number,
    default: 0,
  },
  comments: [commentSchema],
  views: {
    type: Number,
    default: 0,
  },
  topicId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    default: [],
    ref: "Topic",
  },
  placesId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    default: [],
    ref: "Place",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});


const Posts= mongoose.model("Posts", postsSchema);

export default Posts;
