const Logs = require("../models/logs");

exports.createComment = async(req,res,next) => {
    if(!req.body.text){
        return res.send({
            success: false,
            message: "The logs needs text",
        });
    }
    
    const newLog = new Logs({
        text: req.body.text,
        user_id: req.body.user_id,
        mood: req.body.mood,
    });

    const savedLogs = await newLog.save();
    return res.send({
        success: true,
        message: "Logs created Successfully!",
        savedLogs
    });
}

exports.getLogs = async(req,res,rext) => {
    var logs = Logs.find({user_id:req.body.user_id});
    return res.send({
        success: true,
        message: "Logs fetched successfully",
        logs
    });
}