function digitalRoot(n) {
  let arr = (n + '').split('');
  let total;
  do {
    total = 0;
    for (let el of arr) {
      total = +total + +el;
    }
    arr = (total + '').split('');
  } while ((total + '').length != 1)
    return total;
}