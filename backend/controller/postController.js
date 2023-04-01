const Post = require("../models/post");
const Comment = require("../models/comment");
const User = require("../models/user");

exports.createPost = async(req,res,next) => {
    if(!req.body.title){
        return res.send({
            success: false,
            message: "Please provide the title of post",
        });
    }
    
    if(!req.body.user_id){
        return res.send({
            success: false,
            message: "Please provide the user details",
        });
    }

    const newPost = new Post({
        title: req.body.title,
        description: req.body.description,
        user: req.body.user_id
    });
    const savedPost = await newPost.save();
    res.send({
        success: true,
        message: "Post created Successfully!",
        savedPost
    });
}

exports.getAllPostWithComment = async(req,res,next) => {
    try{
        const posts = await Post.find({});
        const send_data = [];

        for(let i=0;i<posts.length;i++){
            console.log(posts[i]);
            let author = await User.findOne({_id:posts[i].user});
            let comments = await Comment.find({post_id: posts[i]._id});
            send_data.push({
                post_id: posts[i]._id,
                title: posts[i].title,
                description: posts[i].description,
                author:author.username,
                created_at: posts[i].createdAt.toISOString().substring(0, 10),
                comments: comments
            });
        };
        return res.send(send_data);
    } catch (err) {
        console.log(err);
        return res.status(500).send({
        status: false,
        message: "Error while fetching posts",
        });
  }
}