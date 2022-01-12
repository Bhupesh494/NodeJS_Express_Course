// Old way to write classes.

// This is a method which can be extended as a class
function Trainer() {
  this.name = "ARC Tutorials";
}

// setting the methods using prototype
Trainer.prototype.setName = function (name) {
  this.name = name;
};

// Setting the methods using Prototype
Trainer.prototype.sayHello = function () {
  console.log(`Hello ${this.name}`);
};

var myTrainer = new Trainer();
myTrainer.setName("rsj");
myTrainer.sayHello();

/* ES6 Way to Write classes*/
class Consultant {
  name = "";

  sayName(name) {
    this.name = "bsrry";
  }

  sayHello() {
    console.log("hello", this.name);
  }
}

const myConsultant = new Consultant();
myConsultant.setName("BHupedhj");
myConsultant.sayHello();
