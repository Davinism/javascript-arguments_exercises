class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

Function.prototype.myBind = function (context) {
  const args = Array.from(arguments).slice(1);
  let that = this;
  return function() {
    const moreArgs = Array.from(arguments);
    return that.apply(context, args.concat(moreArgs));
  };
};

// Function.prototype.myBind = function (context, ...args) {
//     console.log(this);
//   return (...somethingElse) => this.apply(context, args.concat(somethingElse));
// };

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true
