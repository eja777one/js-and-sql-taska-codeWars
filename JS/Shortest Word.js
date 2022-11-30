function findShort(s){
  const arr = s.split(' ');
  const lengths = arr.map(el => el.length);
  return Math.min(...lengths);
}