"use strict";

function onSubmit(e) {
  e.preventDefault();
  document.querySelector('.msg').textContent = '';
  document.querySelector('#image').src = '';
  var prompt = document.querySelector('#prompt').value;
  var size = document.querySelector('#size').value;

  if (prompt === '') {
    alert('Please add some text');
    return;
  }

  generateImageRequest(prompt, size);
}

function generateImageRequest(prompt, size) {
  var response, data, imageUrl;
  return regeneratorRuntime.async(function generateImageRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          showSpinner();
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch('/openai/generateimage', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              prompt: prompt,
              size: size
            })
          }));

        case 4:
          response = _context.sent;

          if (response.ok) {
            _context.next = 8;
            break;
          }

          removeSpinner();
          throw new Error('That image could not be generated');

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(response.json());

        case 10:
          data = _context.sent;
          // console.log(data);
          imageUrl = data.data;
          document.querySelector('#image').src = imageUrl;
          removeSpinner();
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          document.querySelector('.msg').textContent = _context.t0;

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 16]]);
}

function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}

function removeSpinner() {
  document.querySelector('.spinner').classList.remove('show');
}

document.querySelector('#image-form').addEventListener('submit', onSubmit);
//# sourceMappingURL=main.dev.js.map
