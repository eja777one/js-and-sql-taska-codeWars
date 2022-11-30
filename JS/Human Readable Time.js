function humanReadable (seconds) {
  let hours = Math.floor(seconds / 60 / 60);

  let rest = seconds - 60 * 60 * hours

  let minute = Math.floor(rest / 60);

  rest = seconds - 60 * 60 * hours - minute * 60;
  
  hours < 10 ? hours = '0' + hours : hours = '' + hours;
  minute < 10 ? minute = '0' + minute : minute = '' + minute;
  rest < 10 ? rest = '0' + rest : rest = '' + rest;
  
  return hours + ':' + minute + ':' + rest;
}