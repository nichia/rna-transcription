//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dnaStr) => {
  // throw new Error("Remove this statement and implement this function");
  let rna = "";
  const dna = dnaStr.split("");
  for (let indx = 0; indx < dna.length; indx++) {
    rna += DNAMAPPING[dna[indx]];
  }
  return rna;
};

export const DNAMAPPING = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};
