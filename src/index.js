function listen() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address");
  let genre = prompt("What genre of music do you like best?");
  genre = genre.toLowerCase();
  genre = genre.trim();

  if (genre === "rock" || genre === "heavy metal") {
    alert(`Thank you ${name}, we'll email you your bespoke ${genre} playlist very soon!
        Rock on!🎸`);
  } else {
    alert(
      `Thank you ${name}, we'll email you your bespoke ${genre} playlist very soon!😊`
    );
  }
}
let button = document.querySelector("button");
button.addEventListener("click", listen);
