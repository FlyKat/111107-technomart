var feedback = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-content-feedback");
var close = document.querySelector(".modal-feedback-close");

var form = popup.querySelector("form");
var nameUser = popup.querySelector("[name=name]");
var emailUser = popup.querySelector("[name=email]");
var messageText = popup.querySelector("[name=message]");
var storageName = localStorage.getItem("nameUser");
var storageEMail = localStorage.getItem("emailUser");

feedback.addEventListener("click", function(event) {
  event.preventDefault(); 
  popup.classList.add("modal-feedback-show");
  if (storageName) {
    nameUser.value = storageName;
    if (storageEmail) {
      emailUser = storageEMail;
      messageText.focus();
    } else {
        emailUser.focus();
      } 
  } else {
      nameUser.focus();
    } 
});

close.addEventListener("click", function(event) {
  event.preventDefault(); 
  popup.classList.remove("modal-feedback-show");
  popup.classList.remove("modal-feedback-error");
});

form.addEventListener("submit", function(event) {
  if (!nameUser.value || !emailUser.value || !messageText.value) {
    event.preventDefault();
    popup.classList.remove("modal-feedback-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-feedback-error");
  } 
  else {
    localStorage.setItem("name", nameUser.value);
    localStorage.setItem("email", emailUser.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("modal-feedback-show")) { 
      popup.classList.remove("modal-feedback-show");
      popup.classList.remove("modal-feedback-error");
    }
  }
});


var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = document.querySelector(".modal-map-close");

mapOpen.addEventListener("click", function(event) {
 event.preventDefault();  
 mapPopup.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (mapPopup.classList.contains("modal-map-show")) {  
      mapPopup.classList.remove("modal-map-show");
    }
  }
});