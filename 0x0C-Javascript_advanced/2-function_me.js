function welcomeMessage(name) {
  return function () {
    return "Hello " + name;
  };
}
let guillaume = welcomeMessage("Guillaume");
let alex = welcomeMessage("Alex");
let fred = welcomeMessage("Fred");
