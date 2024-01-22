function showEmail() {
  document.querySelector(".email-choice").style.display = "flex";

  if (document.querySelector(".email-choice").style.display == "flex") {
    document.querySelector(".text-choice").style.display = "none";
  }
}

function showText() {
  document.querySelector(".text-choice").style.display = "flex";

  if (document.querySelector(".text-choice").style.display == "flex") {
    document.querySelector(".email-choice").style.display = "none";
  }
}
