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

      shareContainer.classList.remove("hidden", "buttom-[-100%]");
      shareContainer.classList.add("block", "bottom-0", "lg:bottom-[83px]");
    }
  });

  btnCloseShare.addEventListener("click", (e) => {
    e.preventDefault();
    if (btnCloseShare.classList.contains("disabled")) {
      btnCloseShare.classList.remove("disabled", "grid");
      btnCloseShare.classList.add("hidden");

      btnOpenShare.classList.remove("hidden");
      btnOpenShare.classList.add("disabled", "grid");

      shareContainer.classList.remove("block", "bottom-0", "lg:bottom-[83px]");
      shareContainer.classList.add("hidden", "buttom-[-100%]");
    }
  });
}

document.addEventListener("DOMContentLoaded", initialize);
