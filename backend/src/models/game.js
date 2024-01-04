const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const gameSchema = new mongoose.Schema({ 
  gameName: {
    type: String,
    required: true,
    unique: true,
  },
  dataURL: {
    type: String,
    required: true,
    unique: true,
  },
  codeUrl: {
    type: String,
    required: true,
    unique: true,
  },
  frameworkUrl: {
    type: String,
    required: true,
    unique: true,
  },
  loaderUrl: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model("games", gameSchema);
