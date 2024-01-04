const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.addUser = async (req, res, next) => {
    const { userName, email, passwordHash } = req.body;

    const password = await bcrypt.hash(passwordHash, 10);

    const user = new User({
      userName,
      email,
      passwordHash:password,
    });
    const pdRes = await user.save();
    res.json(pdRes);
}

exports.findUser = async (req, res) => {
  try {
    const user = await User.findOne(
      email
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateUser = async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
};

exports.deleteUser = async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.userId);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const pdRes = await User.find({}).sort({"updatedAt": 'desc'});
        res.json(pdRes);
      } catch (error) {
        console.log(error);
        res.send("Error" + error);
      }
};

exports.getUserDetails = async (req, res) => {
    try {
      const { userId } = req.params;
      const userDetails = await User.findOne({
        _id: userId
      });
  
      if(userDetails) {
        res.json(userDetails);
      } else {
        throw new Error('product not found' + ' -> ' + productId)
      }
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  };