'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = require('./db');

var dbClients = _interopRequireWildcard(_db);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Basic Model class for accesing inner attributes easily
 */
var Model = exports.Model = function () {
  _createClass(Model, null, [{
    key: 'setDb',


    /**
     * Change the current DB client
     * @param {string|object} dbClient - The name of an available db client (from /db) or an object with the same API
     */
    value: function setDb() {
      var dbClient = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'postgres';

      if (typeof dbClient === 'string' && !dbClients[dbClients]) {
        throw new Error('Undefined db client ' + dbClients);
      }

      this.db = dbClients[dbClients];
    }

    /**
     * Return the rows that match the conditions
     * @param  {object} [conditions] - It returns all rows if empty
     * @param  {object} [orderBy]    - Object describing the column ordering
     * @param  {string} [extra]      - String appended at the end of the query
     * @return {Promise<array>}
     */


    /**
     * DB client to use. We use Postgres by default. Can be changed via Model.useDB('db client')
     * It's the same for
     * @type {object}
     */

  }, {
    key: 'find',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(conditions, orderBy, extra) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.db.select(this.tableName, conditions, orderBy, extra);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function find(_x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      }

      return find;
    }()

    /**
     * Return the row for the supplied primaryKey or condition object
     * @param  {string|number|object} primaryKeyOrCond - If the argument is an object it uses it for the conditions. Otherwise it'll use it as the searched primaryKey.
     * @return {Promise<object>}
     */

  }, {
    key: 'findOne',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(primaryKeyOrCond, orderBy) {
        var conditions;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                conditions = (typeof primaryKeyOrCond === 'undefined' ? 'undefined' : _typeof(primaryKeyOrCond)) === 'object' ? primaryKeyOrCond : _defineProperty({}, this.primaryKey, primaryKeyOrCond);
                _context2.next = 3;
                return this.db.selectOne(this.tableName, conditions, orderBy);

              case 3:
                return _context2.abrupt('return', _context2.sent);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findOne(_x5, _x6) {
        return _ref2.apply(this, arguments);
      }

      return findOne;
    }()

    /**
     * Count the rows for the table
     * @param  {object} [conditions] - It returns all rows if empty
     * @param  {string} [extra]      - String appended at the end of the query
     * @return {Promise<integer>}
     */

  }, {
    key: 'count',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(conditions, extra) {
        var result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.db.count(this.tableName, conditions, extra);

              case 2:
                result = _context3.sent;
                return _context3.abrupt('return', result.length ? parseInt(result[0].count, 10) : 0);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function count(_x7, _x8) {
        return _ref4.apply(this, arguments);
      }

      return count;
    }()

    /**
     * Forward queries to the db client
     * @param  {string} queryString
     * @param  {array} [values]
     * @return {Promise<array>} - Array containing the matched rows
     */

  }, {
    key: 'query',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(queryString, values) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.db.query(queryString, values);

              case 2:
                return _context4.abrupt('return', _context4.sent);

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function query(_x9, _x10) {
        return _ref5.apply(this, arguments);
      }

      return query;
    }()

    /**
     * Insert the row filtering the Model.columnNames to the Model.tableName table
     * @param  {object} row
     * @return {Promise<object>} the row argument with the inserted primaryKey
     */

  }, {
    key: 'insert',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(row) {
        var insertion;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.db.insert(this.tableName, utils.pick(row, this.columnNames), this.primaryKey);

              case 2:
                insertion = _context5.sent;

                row[this.primaryKey] = insertion.rows[0][this.primaryKey];
                return _context5.abrupt('return', row);

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function insert(_x11) {
        return _ref6.apply(this, arguments);
      }

      return insert;
    }()

    /**
     * Update the row on the Model.tableName table.
     * @param  {object} changes    - An object describing the updates.
     * @param  {object} conditions - An object describing the WHERE clause.
     * @return {Promise<object>}
     */

  }, {
    key: 'update',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(changes, conditions) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.db.update(this.tableName, utils.pick(changes, this.columnNames), conditions);

              case 2:
                return _context6.abrupt('return', _context6.sent);

              case 3:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function update(_x12, _x13) {
        return _ref7.apply(this, arguments);
      }

      return update;
    }()

    /**
     * Delete the row on the Model.tableName table.
     * @param  {object} conditions - An object describing the WHERE clause.
     * @return {Promise<object>}
     */

  }, {
    key: 'delete',
    value: function _delete(conditions) {
      return this.db.delete(this.tableName, conditions);
    }

    /**
     * Checks to see if all column names exist on the attributes object.
     * If you need a more complex approach (skipping NULLABLE columns for example) you can override it.
     * @param  {object}  attributes - Model attributes to check
     * @return {boolean} true if at least one of the properties don't exist on the object
     */

  }, {
    key: 'isIncomplete',
    value: function isIncomplete(attributes) {
      return this.columnNames.some(function (column) {
        return !attributes.hasOwnProperty(column);
      });
    }

    /**
     * Creates a new instance storing the attributes for later use
     * @param  {object} attributes
     * @return {Model<instance>}
     */

  }]);

  function Model(attributes) {
    _classCallCheck(this, Model);

    this.attributes = attributes || {};
  }

  /**
   * Return the row for the this.attributes primaryKey property, forwards to Model.findOne
   * @return {Promise<object>}
   */


  _createClass(Model, [{
    key: 'retreive',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var primaryKey;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                primaryKey = this.attributes[this.constructor.primaryKey];
                _context7.next = 3;
                return this.constructor.findOne(primaryKey);

              case 3:
                this.attributes = _context7.sent;
                return _context7.abrupt('return', this.attributes);

              case 5:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function retreive() {
        return _ref8.apply(this, arguments);
      }

      return retreive;
    }()

    /**
     * Forwards to Mode.insert using this.attributes
     */

  }, {
    key: 'insert',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.constructor.insert(this.attributes);

              case 2:
                return _context8.abrupt('return', _context8.sent);

              case 3:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function insert() {
        return _ref9.apply(this, arguments);
      }

      return insert;
    }()

    /**
     * Forwards to Mode.update using this.attributes. If no conditions are supplied, it uses this.attributes[primaryKey]
     * @params {object} [conditions={ primaryKey: this.attributes[primaryKey] }]
     */

  }, {
    key: 'update',
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(conditions) {
        var primaryKey;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!conditions) {
                  primaryKey = this.constructor.primaryKey;

                  conditions = _defineProperty({}, primaryKey, this.attributes[primaryKey]);
                }
                _context9.next = 3;
                return this.constructor.update(this.attributes, conditions);

              case 3:
                return _context9.abrupt('return', _context9.sent);

              case 4:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function update(_x14) {
        return _ref10.apply(this, arguments);
      }

      return update;
    }()

    /**
     * Forwards to Mode.delete using this.attributes. If no conditions are supplied, it uses this.attributes[primaryKey]
     * @params {object} [conditions={ primaryKey: this.attributes[primaryKey] }]
     */

  }, {
    key: 'delete',
    value: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(conditions) {
        var primaryKey;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!conditions) {
                  primaryKey = this.constructor.primaryKey;

                  conditions = _defineProperty({}, primaryKey, this.attributes[primaryKey]);
                }
                _context10.next = 3;
                return this.constructor.delete(conditions);

              case 3:
                return _context10.abrupt('return', _context10.sent);

              case 4:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function _delete(_x15) {
        return _ref11.apply(this, arguments);
      }

      return _delete;
    }()

    /**
     * Returns true if the `attributes` property evaluates to false
     * @return {boolean}
     */

  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return !this.get();
    }

    /**
     * Forwards to Mode.isIncomplete using this.attributes.
     * @return {boolean}
     */

  }, {
    key: 'isIncomplete',
    value: function isIncomplete() {
      return this.constructor.isIncomplete(this.attributes);
    }

    /**
     * Get a value for a given property name
     * @param  {string} [key] - Key on the attributes object. If falsy, it'll return the full attributes object
     * @return {object} Value found, if any
     */

  }, {
    key: 'get',
    value: function get(key) {
      return key ? this.attributes[key] : this.attributes;
    }

    /**
     * Get a nested attribute for an object. Inspired on [immutable js getIn]{@link https://facebook.github.io/immutable-js/docs/#/Map/getIn}
     * @param  {array} keyPath - Path of keys to follow
     * @return {object} The value of the searched key or null if any key is missing along the way
     */

  }, {
    key: 'getIn',
    value: function getIn(keyPath) {
      var value = this.attributes;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = keyPath[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var prop = _step.value;

          if (!value) return null;
          value = value[prop];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return value;
    }

    /**
     * Set a top level key with a value
     * @param {string} key
     * @param {object} value
     * @return {Model<instace>} The instance of the model (chainable)
     */

  }, {
    key: 'set',
    value: function set(key, value) {
      this.attributes[key] = value;
      return this;
    }

    /**
     * Set a nested attribute for an object. It shortcircuits if any key is missing. Inspired on [immutable js setIn]{@link https://facebook.github.io/immutable-js/docs/#/Map/setIn}
     * @param  {array} keyPath - Path of keys
     * @param  {object} value  - Value to set
     * @return {Model<instace>} The instance of the model (chainable)
     */

  }, {
    key: 'setIn',
    value: function setIn(keyPath, value) {
      var keyAmount = keyPath.length;
      var nested = this.attributes;

      for (var i = 0; i < keyAmount; i++) {
        if (!nested) return null;

        var key = keyPath[i];

        if (i + 1 === keyAmount) {
          nested[key] = value;
        } else {
          nested = nested[key];
        }
      }

      return this;
    }
  }]);

  return Model;
}();

Model.tableName = null;
Model.columnNames = [];
Model.primaryKey = 'id';
Model.db = dbClients['postgres'];