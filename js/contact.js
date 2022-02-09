name = document.getElementById("name-input");
email = document.getElementById("email-input");
org = document.getElementById("org-input");
msg = document.getElementById("msg-input");
sendButton = document.getElementById("send-button")
confirmBanner = document.getElementById("confirm-banner");
form = document.getElementById("contact-form");

$('#send-button').click(function () {
    send();
    return false;
   });

function send() {
    confirmBanner.style.opacity = "1";
    confirmBanner.transform = "translateY(0%)";
    name.value = "";
    email.value = "";
    org.value = "";
    msg.value = "";
}

function closeBanner() {
    confirmBanner.style.opacity = "0";
    confirmBanner.transform = "translateY(100%)";
}