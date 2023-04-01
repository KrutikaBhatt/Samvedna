const Spaces = require("../models/spaces");
const Spaces = require("../models/spaces");

exports.create = async (req, res, next) => {
  if (!req.body.title) {
    return res.send({
      success: false,
      message: "Please provide the title of post",
    });
  }

  if (!req.body.description) {
    return res.send({
      success: false,
      message: "Please provide the user details",
    });
  }

  if (!req.body.image_url) {
    return res.send({
      success: false,
      message: "Please provide an image",
    });
  }

  const newSpace = new Spaces({
    title: req.body.title,
    description: req.body.description,
    user: req.body.user_id,
    image_url: req.body.image_url,
  });
  const savedSpace = await newSpace.save();
  res.send({
    success: true,
    message: "Space created Successfully!",
    savedSpace,
  });
};

exports.getAllSpaces = async (req, res, next) => {
  try {
    const spaces = await Spaces.find({});

    return res.send(spaces);
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      status: false,
      message: "Error while fetching posts",
    });
  }
};


exports.getSpace = async (req, res, next) => {
    try {
      const spaces = await Spaces.find({
        _id : req.params.id
      });
  
      return res.send(spaces[0]);
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        status: false,
        message: "Error while fetching posts",
      });
    }
  };
  


