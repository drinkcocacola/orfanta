

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fuk1 = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var html, m, info;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return ganker.get(url);

                    case 2:
                        html = _context.sent;
                        m = html.match(/src: "([^"]+)/);

                        if (!(m[1].indexOf('http') !== 0)) {
                            _context.next = 6;
                            break;
                        }

                        throw new Error('invalid');

                    case 6:
                        _context.next = 8;
                        return ganker.getFollow(m[1]);

                    case 8:
                        info = _context.sent;

                        hay({
                            size: info.size, u: info.url, m: meta, s: url, n: 'Clipwatching', lb: 'NOR'
                        });

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function fuk1() {
        return _ref.apply(this, arguments);
    };
}();
fuk1();