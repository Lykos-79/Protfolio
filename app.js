



// --------text_rotation----------

const text = ['Software Enginner', 'Web Developer', 'Web Designer', 'Tech Enthusiast', "Lifelong Learner"];

let index = 0

function changeText() {
    const element = document.getElementById("changing-texts");
    element.textContent = text[index];
    index = (index + 1) % text.length;

}

setInterval(changeText, 2000);


// -------------contact_popup--------------

function copyEmail() {
    const email = document.getElementById("email").textContent;
    navigator.clipboard.writeText(email).then(() => {
      // Show the pop-up message
      const popup = document.getElementById("copy-popup");
      popup.classList.add("show");
  
      // Hide the pop-up message after 2 seconds
      setTimeout(() => {
        popup.classList.remove("show");
      }, 2000);
    }).catch((error) => {
      console.error("Copy failed", error);
    });
  }