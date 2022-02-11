const member = document.getElementById("member");
const block = document.getElementById("block");
var score=0

function jump() {
  if (member.classList != "jump") {
    member.classList.add("jump");
  }

  setTimeout(function() {
    member.classList.remove("jump");
  }, 300);
}

if (blockLeft = 50) {
  score=score+1;
}

let isAlive = setInterval(function () {
    //get current member Y position
    let memberTop = parseInt(window.getComputedStyle(member).getPropertyValue("top"));

    //get current block X position
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));


    //detect collision
    if (blockLeft < 50 && blockLeft > 0 && memberTop >= 140) {

      //collision
      alert("Congrats! Crewtendo Finally Uploaded!");

      block.classList.add("reset");

    setTimeout(function() {
      block.classList.remove("reset");
    }, 100);
    }

}, 10);

function draw() {
 score = new component("30px", "Consolas", "black", 280, 40, "text");
}
document.addEventListener("keydown", function (event) {
  jump();
});
