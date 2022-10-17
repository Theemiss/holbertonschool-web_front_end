"use strict";

class roomDimensions {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
  getArea() {
    return this.width * this.length;
  }
}
let boundGetArea = roomDimensions.getArea.bind(roomDimensions);
console.log(boundGetArea());
