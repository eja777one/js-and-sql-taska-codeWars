function fakeBin(x){
  const arr = x.split('');
  let answer = arr.map(el => (el < 5) ? '0' : '1');
  return answer.join('');
}