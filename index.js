for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let check = document.querySelectorAll(".drum")[i].textContent;
    makesounds(check);
    buttonAnimation(check);
  });
}

document.addEventListener("keydown", function (event) {
  makesounds(event.key);
  buttonAnimation(event.key);
});

function makesounds(check) {
  if (check === "w") {
    let audio = new Audio("./sounds/crash.mp3");
    audio.play();
  } else if (check === "a") {
    let audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
  } else if (check === "s") {
    let audio = new Audio("./sounds/snare.mp3");
    audio.play();
  } else if (check === "d") {
    let audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
  } else if (check === "j") {
    let audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
  } else if (check === "k") {
    let audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
  } else if (check === "l") {
    let audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
  }
}

function buttonAnimation(curKey) {
  let activeButton = document.querySelector("." + curKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
