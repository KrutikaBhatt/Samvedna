const Comment = require("../models/comment");

exports.createComment = async(req,res,next) => {
    if(!req.body.text){
        return res.send({
            success: false,
            message: "The comment needs text",
        });
    }
    
    if(!req.body.created_by || !req.body.post_id){
        return res.send({
            success: false,
            message: "Please provide provide user or post details",
        });
    }

    const newComment = new Comment({
        text: req.body.text,
        post_id: req.body.post_id,
        author: req.body.author,
        created_by: req.body.user_id
    });
    const savedComment = await newComment.save();
    return res.send({
        success: true,
        message: "Comment created Successfully!",
        savedComment
    });
}