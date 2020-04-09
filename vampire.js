class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(offspring) {
    this.offspring.push(offspring);
    offspring.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {

    if (this === vampire.creator) {
      return true;
      } 
      if (this.name === 'root') {
        console.log(this.name, Original.name)
        return true;
      }
      if (vampire.creator !== Original) {
        return false;
      }
  };

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

const Original = new Vampire("Original", 1857);
const Bart = new Vampire("Bart", 1875);
const Ansel = new Vampire("Ansel", 1890);
const Elgort = new Vampire("Elgort", 1901);
const Sarah = new Vampire("Sarah", 1918);
const Andrew = new Vampire("Andrew", 1942);

Original.addOffspring(Ansel);
Original.addOffspring(Bart);
Ansel.addOffspring(Elgort);
Ansel.addOffspring(Sarah);
Elgort.addOffspring(Andrew);



module.exports = Vampire;

