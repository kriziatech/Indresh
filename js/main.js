AOS.init({
  duration: 1000,
  once: true
});

function sendWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const phoneNumber = "918376097938";

  const text =
    "Hello Indresh,%0A%0A" +
    "Name: " + name + "%0A" +
    "Email: " + email + "%0A" +
    "Message: " + message;

  const url = "https://wa.me/" + phoneNumber + "?text=" + text;
  window.open(url, "_blank");
}

// HERO TYPEWRITER EFFECT
const typingText = "Indresh Singh";
let index = 0;

function typeWriter() {
  if (index < typingText.length) {
    document.getElementById("typing").innerHTML += typingText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener("load", typeWriter);

// FAQ ACCORDION
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle("active");

    // Close others (optional – premium UX)
    document.querySelectorAll(".faq-item").forEach(item => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });
  });
});


