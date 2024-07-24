const btnOpenShare = document.querySelector("#btnOpenShare");
const btnCloseShare = document.querySelector("#btnCloseShare");
const shareContainer = document.querySelector("#shareContainer");

function initialize() {
  btnOpenShare.addEventListener("click", (e) => {
    e.preventDefault();
    if (btnOpenShare.classList.contains("disabled")) {
      btnOpenShare.classList.remove("disabled", "grid");
      btnOpenShare.classList.add("hidden");

      btnCloseShare.classList.remove("hidden");
      btnCloseShare.classList.add("disabled", "grid");

      shareContainer.classList.remove("hidden");
      shareContainer.classList.add("block");
    }
  });

  btnCloseShare.addEventListener("click", (e) => {
    e.preventDefault();
    if (btnCloseShare.classList.contains("disabled")) {
      btnCloseShare.classList.remove("disabled", "grid");
      btnCloseShare.classList.add("hidden");

      btnOpenShare.classList.remove("hidden");
      btnOpenShare.classList.add("disabled", "grid");

      shareContainer.classList.remove("block");
      shareContainer.classList.add("hidden");
    }
  });
}

document.addEventListener("DOMContentLoaded", initialize);
