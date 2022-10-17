"use strict";

class studentHogwarts {
  privateScore = 0;
  name = null;
  changeScoreBy = function (points) {
    this.privateScore += points;
  };

  setName = function (newName) {
    this.name = newName;
  };

  rewardStudent = function () {
    this.changeScoreBy(1);
  };

  penalizeStudent = function () {
    this.changeScoreBy(-1);
  };

  getScore = function () {
    return this.name + ":" + " " + this.privateScore;
  };
}

let harry = new studentHogwarts("Harry");
for (let j = 0; j < 4; j++) {
  harry.rewardStudent();
}
console.log(harry.getScore());

let draco = new studentHogwarts("Draco");
draco.rewardStudent();
for (let j = 0; j < 3; j++) {
  draco.penalizeStudent();
}
console.log(draco.getScore());
