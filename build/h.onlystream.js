

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fuk = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var html;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return ganker.get(url, { 'User-Agent': 'Firefox 69' });

                    case 2:
                        html = _context.sent;

                        html = html.split('updateSrc([{src: "')[1].split('"')[0];
                        hay({
                            size: 0, u: html, m: meta, s: url, n: 'Onlystream', lb: 'NOR'
                        });

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function fuk() {
        return _ref.apply(this, arguments);
    };
}();
fuk();