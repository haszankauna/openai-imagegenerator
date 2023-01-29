"use strict";

var _require = require('openai'),
    Configuration = _require.Configuration,
    OpenAIApi = _require.OpenAIApi;

var configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
var openai = new OpenAIApi(configuration);

var generateImage = function generateImage(req, res) {
  var _req$body, prompt, size, imageSize, response, imageUrl;

  return regeneratorRuntime.async(function generateImage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, prompt = _req$body.prompt, size = _req$body.size;
          imageSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(openai.createImage({
            prompt: prompt,
            n: 1,
            size: imageSize
          }));

        case 5:
          response = _context.sent;
          imageUrl = response.data.data[0].url;
          res.status(200).json({
            success: true,
            data: imageUrl
          });
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](2);

          if (_context.t0.response) {
            console.log(_context.t0.response.status);
            console.log(_context.t0.response.data);
          } else {
            console.log(_context.t0.message);
          }

          res.status(400).json({
            success: false,
            error: 'The image could not be generated'
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 10]]);
};

module.exports = {
  generateImage: generateImage
};
//# sourceMappingURL=openaiController.dev.js.map
