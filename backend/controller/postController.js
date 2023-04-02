const Post = require("../models/post");
const Comment = require("../models/comment");
const User = require("../models/user");

exports.createPost = async (req, res, next) => {
  if (!req.body.title) {
    return res.send({
      success: false,
      message: "Please provide the title of post",
    });
  }

  if (!req.body.user_id) {
    return res.send({
      success: false,
      message: "Please provide the user details",
    });
  }

  const newPost = new Post({
    title: req.body.title,
    description: req.body.description,
    user: req.body.user_id,
  });
  const savedPost = await newPost.save();
  res.send({
    success: true,
    message: "Post created Successfully!",
    savedPost,
  });
};

exports.getPostByAuthor = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.body.author }).count();
    res.send({ success: true, msg: "post count fetched", data: posts });
  } catch (error) {
    res.send({ success: false, msg: "post not found" });
  }
};

exports.getAllPostWithComment = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    const send_data = [];

    for (let i = 0; i < posts.length; i++) {
      let author = await User.findOne({ _id: posts[i].user });
      let comments = await Comment.find({ post_id: posts[i]._id });
      send_data.push({
        post_id: posts[i]._id,
        title: posts[i].title,
        description: posts[i].description,
        author: author.username,
        created_at: posts[i].createdAt.toISOString().substring(0, 10),
        comments: comments,
      });
    }
    return res.send(send_data);
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      status: false,
      message: "Error while fetching posts",
    });
  }
};

exports.deletePost = async (req, res, next) => {
  console.log(req.body);
  const { username, post_id } = req.body;
  const user = await User.findOne({ username });
  if (user?.is_moderator) {
    const post = await Post.deleteOne({ post_id });
    console.log(post);
    return res.send({
      success: true,
      message: "Post deleted",
    });
  } else {
    return res.send({
      success: false,
      message: "Only moderator can delete",
    });
  }
};
