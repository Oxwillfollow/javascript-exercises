const contains = function (obj, item) {
  // stop if item is found
  if (obj === item) return true;
  if (isNaN(obj) && isNaN(item) && typeof item === "number") return true;

  // stop at non-objects or empty objects
  if (typeof obj !== "object" || obj === null) return;
  if (Object.keys(obj).length === 0) return;

  for (let val of Object.values(obj)) {
    if (contains(val, item) == true) return true;
  }

  return false;
};

// Do not edit below this line
module.exports = contains;
