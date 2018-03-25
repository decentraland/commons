"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promisify = promisify;
exports.sleep = sleep;
exports.isEmptyObject = isEmptyObject;
exports.omit = omit;
exports.mapOmit = mapOmit;
exports.pick = pick;
exports.arrayToObject = arrayToObject;
/**
 * Promisifies a node callback style function. Takes a second argument that is bound as `this`
 * @param  {Function} fn - Node style callback, accepting (error, result)
 * @return {Promise}
 */
function promisify(fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      fn.apply(undefined, args.concat([function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }]));
    });
  };
}

/**
 * Sleep for a certain amount of milliseconds
 * @param {integer} ms - miliseconds to sleep
 * @return {Promise} - Promise that resolves when the sleeping is done
 */
function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

/**
 * Check if an object has keys
 * @param {object} obj
 */
function isEmptyObject(obj) {
  return obj && Object.keys(obj).length === 0;
}

/**
 * Return a copy of the object, filtered to omit the blacklisted array of valid keys
 * @param {object} obj
 * @param {array} keys
 */
function omit(obj, keys) {
  var newKeys = Object.keys(obj).filter(function (key) {
    return !keys.includes(key);
  });
  return pick(obj, newKeys);
}

/**
 * Returns a copy of the array of with the keys filtered on each object
 * @param {array} array - array of objects
 * @param {array} keys
 */
function mapOmit(array, keys) {
  return array.map(function (obj) {
    return omit(obj, keys);
  });
}

/**
 * Return a copy of the object, filtered to only have values for the whitelisted array of valid keys
 * @param {object} obj
 * @param {array} keys
 */
function pick(obj, keys) {
  var result = {};

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (obj.hasOwnProperty(key)) {
        result[key] = obj[key];
      }
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

  return result;
}

/**
 * Return a an object using a field as key out of an array of objects
 * @param {array} arr
 * @param {string} key
 * @param {string} (optional) value - use only one field of object as value
 */
function arrayToObject(arr, key, value) {
  return arr.reduce(function (map, obj) {
    map[obj[key]] = value != null ? obj[value] : obj;
    return map;
  }, {});
}