function narcissistic(value) {
  let arr = (value + '').split('');
  let total = 0;
  for (let el of arr) {
    total += Math.pow(el, arr.length);
  }
  return total == value;
}
