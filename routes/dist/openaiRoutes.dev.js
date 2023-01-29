"use strict";

var express = require('express');

var _require = require('../controllers/openaiController'),
    generateImage = _require.generateImage;

var router = express.Router();
router.post('/generateimage', generateImage);
module.exports = router;
//# sourceMappingURL=openaiRoutes.dev.js.map
