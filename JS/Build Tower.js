function towerBuilder(nFloors) {
  let tower = [];
  for (let i = 0; i < nFloors; i++) {
    const space = ' '.repeat(nFloors - i - 1);
    const star = '*'.repeat(1 + i * 2);
    tower.push(space + star + space);
  }
  return tower;
}