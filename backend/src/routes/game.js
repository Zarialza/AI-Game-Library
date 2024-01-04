const express = require('express');
const gameController = require('../controller/game')

const router = express.Router();

router.get('/', gameController.getAllGames);
router.get('/detail/:gameID', gameController.getGameDetail);
router.post('/add', gameController.addGame);

module.exports = router;