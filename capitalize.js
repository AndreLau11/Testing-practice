function capitalize(string) {
  const newUpperLetter = string.charAt(0).toUpperCase();
  const newRestWorld = string.substring(1);

  return newUpperLetter + newRestWorld;
}

module.exports = capitalize;