

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fuk2 = function () {
   var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var html, m, MDCore, u, info;
      return regeneratorRuntime.wrap(function _callee$(_context) {
         while (1) {
            switch (_context.prev = _context.next) {
               case 0:
                  _context.next = 2;
                  return ganker.get(url);

               case 2:
                  html = _context.sent;
                  m = html.split('eval(')[1];

                  m = m.split('</script>')[0];
                  m = 'eval(' + m;
                  MDCore = {};
                  _context.prev = 7;

                  eval(m);
                  u = MDCore.vsrc.indexOf('http') == -1 ? 'https:' + MDCore.vsrc : MDCore.vsrc;
                  _context.next = 12;
                  return ganker.getFollow(u);

               case 12:
                  info = _context.sent;

                  hay({
                     size: info.size, u: info.url, m: meta, s: url, n: 'Mixdrop', lb: 'NOR'
                  }, movieInfo);
                  _context.next = 18;
                  break;

               case 16:
                  _context.prev = 16;
                  _context.t0 = _context['catch'](7);

               case 18:
               case 'end':
                  return _context.stop();
            }
         }
      }, _callee, undefined, [[7, 16]]);
   }));

   return function fuk2() {
      return _ref.apply(this, arguments);
   };
}();

fuk2();