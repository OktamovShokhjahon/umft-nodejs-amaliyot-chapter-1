// checkObject
const checkObject = (obj, allowedKeys) => {
  const objKeys = Object.keys(obj);
  const onlyHasAllowedKeys =
    objKeys.every((key) => allowedKeys.includes(key)) &&
    objKeys.length === allowedKeys.length;

  return onlyHasAllowedKeys;
};

// export
module.exports = { checkObject };
