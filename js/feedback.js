const feedbackLink = document.querySelector(".contacts-button");
const feedbackModal = document.querySelector(".modal-feedback");
const feedbackClose = feedbackModal.querySelector(".modal-close");
const feedbackForm = feedbackModal.querySelector(".feedback-form");
const feedbackName = feedbackModal.querySelector(".feedback-name");
const feedbackEmail= feedbackModal.querySelector(".feedback-email");
const feedbackMessage = feedbackModal.querySelector(".feedback-message");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add("modal-show");

  if (storage) {
    feedbackName.value = storage;
    feedbackEmail.focus();
  } else {
    feedbackName.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.remove("modal-show");
  feedbackModal.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    feedbackModal.classList.remove("modal-error");
    feedbackModal.offsetWidth = feedbackModal.offsetWidth;
    feedbackModal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackModal.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackModal.classList.remove("modal-show");
      feedbackModal.classList.remove("modal-error");
    }
  }
});
