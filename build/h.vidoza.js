

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fuk = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var html, m, info;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return ganker.get(url, { 'User-Agent': 'Firefox 69' });

                    case 2:
                        html = _context.sent;
                        m = html.match(/source src="([^"]+)/);

                        if (!(m != undefined)) {
                            _context.next = 12;
                            break;
                        }

                        if (!(m[1].search('https://') != -1 || m[1].search('http://') != -1)) {
                            _context.next = 12;
                            break;
                        }

                        if (!(m[1].indexOf('640x360_universal_july16.mp4') != -1)) {
                            _context.next = 8;
                            break;
                        }

                        throw new Error('FUCKING Vidoza');

                    case 8:
                        _context.next = 10;
                        return ganker.getFollow(m[1]);

                    case 10:
                        info = _context.sent;

                        hay({
                            size: info.size, u: info.url, m: meta, s: url, n: 'Vidoza', lb: 'NOR'
                        });

                    case 12:
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