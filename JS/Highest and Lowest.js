function highAndLow(numbers){
  const max = Math.max(...numbers.split(' '));
  const min = Math.min(...numbers.split(' '));
  return `${max} ${min}`;
}