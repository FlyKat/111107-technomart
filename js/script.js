var feedback = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-content-feedback");
var close = document.querySelector(".modal-content-close");

var form = popup.querySelector("form");
var nameUser = popup.querySelector("[name=name]");
var emailUser = popup.querySelector("[name=email]");
var messageText = popup.querySelector("[name=message]");
var storageName = localStorage.getItem("nameUser");
var storageEMail = localStorage.getItem("emailUser");

feedback.addEventListener("click", function(event) {
  event.preventDefault(); 
  popup.classList.add("modal-content-show");
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
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!nameUser.value || !emailUser.value || !messageText.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } 
  else {
    localStorage.setItem("name", nameUser.value);
    localStorage.setItem("email", emailUser.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("modal-content-show")) { 
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});


var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = document.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
 event.preventDefault();  
 mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (mapPopup.classList.contains("modal-content-show")) {  
      mapPopup.classList.remove("modal-content-show");
    }
  }
});