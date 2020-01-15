

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fuk = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var html, arrVideoQuality, m, window, arrPromise;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        url = url.replace('uptobox', 'uptostream');
                        _context2.next = 3;
                        return ganker.get(url, { 'User-Agent': 'Firefox 69' });

                    case 3:
                        html = _context2.sent;
                        arrVideoQuality = [];
                        _context2.prev = 5;
                        m = html.match(/(window\.sources = ([^;]+))/);
                        window = {};

                        eval(m[1]);

                        arrVideoQuality = window.sources;
                        arrPromise = arrVideoQuality.map(function () {
                            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(val) {
                                var label, info;
                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                label = val.label;
                                                _context.next = 3;
                                                return ganker.getFollow(val.src);

                                            case 3:
                                                info = _context.sent;


                                                if (isDie != false) {
                                                    hay({
                                                        size: info.size, u: info.url, m: meta, s: url, n: 'Uptostream', lb: label
                                                    }, movieInfo);
                                                }

                                            case 5:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, this);
                            }));

                            return function (_x) {
                                return _ref2.apply(this, arguments);
                            };
                        }());
                        _context2.next = 13;
                        return Promise.all(arrPromise);

                    case 13:
                        _context2.next = 17;
                        break;

                    case 15:
                        _context2.prev = 15;
                        _context2.t0 = _context2['catch'](5);

                    case 17:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined, [[5, 15]]);
    }));

    return function fuk() {
        return _ref.apply(this, arguments);
    };
}();
fuk();