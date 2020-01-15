

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fuk = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var html, m, hls, sv, domain, fuck, hls1, sv1, domain1, info;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return ganker.get(url, { 'User-Agent': 'Firefox 69' });

                    case 2:
                        html = _context.sent;
                        m = html.split('eval(')[2];

                        m = m.split('</script>')[0];
                        m = 'eval(' + m;
                        _context.prev = 6;

                        m = m.match(/\|([a-z0-9]+)\|([a-z0-9]+)\|sources/);
                        hls = m[1];
                        sv = m[2];
                        domain = 'https://' + sv + '.gounlimited.to/';
                        fuck = domain + hls + '/v.mp4';
                        _context.next = 30;
                        break;

                    case 14:
                        _context.prev = 14;
                        _context.t0 = _context['catch'](6);

                        m = html.split('eval(')[1];
                        m = m.split('</script>')[0];
                        m = 'eval(' + m;
                        _context.prev = 19;

                        m = m.match(/\|([a-z0-9]+)\|([a-z0-9]+)\|sources/);
                        hls1 = m[1];
                        sv1 = m[2];
                        domain1 = 'https://' + sv1 + '.gounlimited.to/';
                        fuck = domain1 + hls1 + '/v.mp4';
                        _context.next = 30;
                        break;

                    case 27:
                        _context.prev = 27;
                        _context.t1 = _context['catch'](19);
                        return _context.abrupt('return');

                    case 30:
                        if (!(fuck.search('https://') == -1 && fuck.search('http://') == -1)) {
                            _context.next = 32;
                            break;
                        }

                        throw new Error("LINK DIE");

                    case 32:
                        _context.next = 34;
                        return ganker.getFollow(fuck);

                    case 34:
                        info = _context.sent;

                        hay({
                            size: info.size, u: info.url, m: meta, s: url, n: 'Gounlimited', lb: 'NOR'
                        }, movieInfo);

                        /*
                        let info = await ganker.getFollow(m[1]);
                        hay({
                            size: info.size, u: info.url, m: meta, s: url, n: 'Clipwatching', lb: 'NOR'
                        });
                        */

                    case 36:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[6, 14], [19, 27]]);
    }));

    return function fuk() {
        return _ref.apply(this, arguments);
    };
}();
fuk();