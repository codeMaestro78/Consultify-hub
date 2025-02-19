let container = document.getElementById("container");
let registerBtn = document.getElementById("register");
let loginBtn = document.getElementById("login");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const buttons = [registerBtn, loginBtn];

buttons.forEach(button => {
  button.onclick = function () {
    const action = this.id === "register" ? "add" : "remove";
    container.classList[action]("active");
  };
});

document.getElementById('signup-button').addEventListener('click', function(event) {
  const emailInput = document.getElementById('i1').value;
  
  if (emailRegex.test(emailInput)) {
    
    const form = this.closest('form');
    if (form && form.name === 'f1') {
      event.preventDefault();
      window.location.href = 'navbar.html';
    }
  } else {
    alert('Invalid email address');
    event.preventDefault();
  }
});
