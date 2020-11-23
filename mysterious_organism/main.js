// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
function pAequorFactory(num, array) {
  return {
    specimenNum: num,
    dna: array,
    mutate() {
      let letters = ['A', 'T', 'C', 'G']
      const newDna = this.dna;
      const randomPosition = Math.floor(Math.random() * 15);
      let index = letters.indexOf(this.dna[randomPosition]);
      letters = letters.filter(letter => {
        return letter != letters[index]
      });
      newDna[randomPosition] = letters[Math.floor(Math.random() * 3)];
      return newDna;
    },
    compareDNA(obj) {
      let sBases = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === obj.dna[i]) sBases++;
      }
      console.log("This two P.aequaors have " + (Math.floor((sBases / 15) * 100)) + "% common DNA");
    },//compareDNA function ends

    willLikelySurvive() {
      let cAndG = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          cAndG++;
        }
      }
      if ((cAndG / this.dna.length) > 0.6) {
        return true;
      }
      else {
        return false;
      }
    }//this is the end of the willLikelySurvive function


  };

}
const instancesArray = [];
for (let i = 0; i < 30; i++) {
  let cretureDna = mockUpStrand();

  instancesArray[i] = pAequorFactory(i, cretureDna);

  //The if below ensures that the creature will lilely to live
  if (!instancesArray[i].willLikelySurvive()) {
    i--
  }
}




