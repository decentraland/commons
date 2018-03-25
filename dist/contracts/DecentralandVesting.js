'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DecentralandVesting = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DecentralandVesting = require('./artifacts/DecentralandVesting.json');

var _ethereum = require('../ethereum');

var _env = require('../env');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** DecentralandVesting contract class */
var DecentralandVesting = exports.DecentralandVesting = function (_Contract) {
  _inherits(DecentralandVesting, _Contract);

  function DecentralandVesting() {
    _classCallCheck(this, DecentralandVesting);

    return _possibleConstructorReturn(this, (DecentralandVesting.__proto__ || Object.getPrototypeOf(DecentralandVesting)).apply(this, arguments));
  }

  _createClass(DecentralandVesting, [{
    key: 'duration',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var bigNumber;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.call('duration');

              case 2:
                bigNumber = _context.sent;
                return _context.abrupt('return', bigNumber.toNumber());

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function duration() {
        return _ref.apply(this, arguments);
      }

      return duration;
    }()
  }, {
    key: 'cliff',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var bigNumber;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.call('cliff');

              case 2:
                bigNumber = _context2.sent;
                return _context2.abrupt('return', bigNumber.toNumber());

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function cliff() {
        return _ref2.apply(this, arguments);
      }

      return cliff;
    }()
  }, {
    key: 'vestedAmount',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var bigNumber;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.call('vestedAmount');

              case 2:
                bigNumber = _context3.sent;
                return _context3.abrupt('return', _ethereum.eth.utils.fromWei(bigNumber.toNumber()));

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function vestedAmount() {
        return _ref3.apply(this, arguments);
      }

      return vestedAmount;
    }()
  }, {
    key: 'releasableAmount',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var bigNumber;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.call('releasableAmount');

              case 2:
                bigNumber = _context4.sent;
                return _context4.abrupt('return', _ethereum.eth.utils.fromWei(bigNumber.toNumber()));

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function releasableAmount() {
        return _ref4.apply(this, arguments);
      }

      return releasableAmount;
    }()
  }, {
    key: 'released',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var bigNumber;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.call('released');

              case 2:
                bigNumber = _context5.sent;
                return _context5.abrupt('return', _ethereum.eth.utils.fromWei(bigNumber.toNumber()));

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function released() {
        return _ref5.apply(this, arguments);
      }

      return released;
    }()
  }, {
    key: 'start',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var bigNumber;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.call('start');

              case 2:
                bigNumber = _context6.sent;
                return _context6.abrupt('return', bigNumber.toNumber());

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function start() {
        return _ref6.apply(this, arguments);
      }

      return start;
    }()
  }], [{
    key: 'getContractName',
    value: function getContractName() {
      return 'DecentralandVesting';
    }
  }, {
    key: 'getDefaultAddress',
    value: function getDefaultAddress() {
      return _env.env.universalGet('TERRAFORM_RESERVE_CONTRACT_ADDRESS');
    }
  }, {
    key: 'getDefaultAbi',
    value: function getDefaultAbi() {
      return _DecentralandVesting.abi;
    }
  }]);

  return DecentralandVesting;
}(_ethereum.Contract);