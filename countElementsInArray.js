module.exports = (elements, array) => {
  if (!Array.isArray(elements)) {
    throw new Error(`argument "elements" should be an array`);
  }

  if (!Array.isArray(array)) {
    throw new Error(`argument "array" should be an array`);
  }

  return array.filter((item) => elements.includes(item)).length;
};
