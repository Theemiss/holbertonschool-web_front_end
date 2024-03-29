function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;

    document.body.style.fontWeight = weight;

    document.body.style.textTransform = transform;

    document.body.style.backgroundColor = background;

    document.body.style.color = color;
  };
}

function main(){
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    let p = document.createElement("p");
    p.innerText = "Welcome Holberton!";
    document.body.appendChild(p);
    let spookyButton = document.createElement("button");
    spookyButton.innerText = "Spooky";
    document.body.appendChild(spookyButton);
    let darkButton = document.createElement("button");
    darkButton.innerText = "Dark mode";
    document.body.appendChild(darkButton);
    let screamButton = document.createElement("button");
    screamButton.innerText = "Scream mode";
    document.body.appendChild(screamButton);
    spookyButton.onclick = spooky;
    darkButton.onclick = darkMode;
    screamButton.onclick = screamMode;
  
}

main();
