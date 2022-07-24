const form = document.querySelector('form');

function valid() {
  const messageBox = document.getElementById('message-box');
  messageBox.innerHTML = 'Invalid input. Your email should be in lowercase. Form has not been submitted';
  messageBox.classList.add('active');
}

form.addEventListener('submit', (myform) => {
  if (form.email.value !== form.email.value.toLowerCase()) {
    myform.preventDefault();
    valid();
  }
});