const { DateTime } = require("luxon");
const _ = require("lodash");

function toLocaleDate(dateObj) {
  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
}

function filter(collection, values, path) {
  if (values instanceof String) {
    values = [values];
  }

  return collection.filter((entry) =>
    values.some((item) => item === _.get(entry, path))
  );
}

module.exports = {
  toLocaleDate,
  filter,
};
