const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

var destructivelyAppendKitten = (name) => {
  return kittens.push(name);
}

var destructivelyPrependKitten = (name) => {
  return kittens.unshift(name);
}

var destructivelyRemoveLastKitten = () => {
  return kittens.pop();
}

var destructivelyRemoveFirstKitten = () => {
  return kittens.shift();
}

var appendKitten = name => {
  var new_kittens = [...kittens, name];
  return new_kittens;
}

var prependKitten = name => {
  var new_kittens = [name, ...kittens];
  return new_kittens;
}

var removeLastKitten = () => {
  return kittens.slice(0, kittens.length - 1);
}

var removeFirstKitten = () => {
  return kittens.slice(1);
}
