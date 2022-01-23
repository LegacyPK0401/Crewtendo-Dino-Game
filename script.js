const member = document.getElementById("member");

function jump() {
  if (member.classList != "jump") {
    member.classList.add("jump");
  }
  member.classList.add("jump");

  setTimeout(function() {
    member.classList.remove("jump");
  }, 300);
}

document.addEventListener("keydown", function (event) {
  jump();
});
