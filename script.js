const member = document.getElementById("member");
const block = document.getElementById("block");

function jump() {
  if (member.classList != "jump") {
    member.classList.add("jump");
  }

  setTimeout(function() {
    member.classList.remove("jump");
  }, 300);
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

document.addEventListener("keydown", function (event) {
  jump();
});
