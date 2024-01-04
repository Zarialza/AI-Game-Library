const Game = require("../models/game");

exports.addGame = async (req, res, next) => {
    const { gameName, dataURL, loaderUrl, frameworkUrl } = req.body;

    const game = new Game({
        gameName,
        dataURL,
        loaderUrl,
        frameworkUrl

    });
    const pdRes = await game.save();
    res.json(pdRes);
}

exports.getGameDetail = async (req, res) => {
    try {
      const { gameID } = req.params;
      const gameDetail = await Game.findOne({
        _id: gameID
      });
  
      if(gameDetail) {
        console.log(gameDetail, gameID)
        res.json(gameDetail);
      } else {
        throw new Error('game not found' + ' -> ' + gameID)
      }
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
};

exports.getAllGames = async (req, res) => {
    try {
      const gRes = await Game.find({}).sort({"updatedAt": 'desc'});
      res.json(gRes);
    } catch (error) {
      console.log(error);
      res.send("Error" + error);
    }
  };
