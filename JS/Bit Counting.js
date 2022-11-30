var countBits = function(n) {
  const bin = n.toString(2);
  let answer = 0;
  for (let char of bin) {
    if (char == '1') answer += 1;
  }
  return answer;
};