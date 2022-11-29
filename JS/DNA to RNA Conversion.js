function DNAtoRNA(dna) {
  return dna.split('').map(el => el == 'T' ? 'U' : el).join('');
}