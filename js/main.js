const button = document.getElementById("js--menu");
const nav = document.getElementById("js--nav");
const closeButton = document.getElementById("js--close");
const body = document.getElementById("js--body");

button.onclick = () => {
  nav.classList.add("visible");
  body.style.overflow = "hidden";
};

closeButton.onclick = () => {
  nav.classList.remove("visible");
  body.style.overflow = "auto";
};

// CTA-button click event
const ctaButton = document.getElementById("cta-button");
if (ctaButton) {
  ctaButton.addEventListener("click", function () {
    alert(
      "Bedankt voor je interesse! Neem contact met ons op om je bezoek te plannen."
    );
  });
}

// Contactform submit event
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      "Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op."
    );
  });
}
