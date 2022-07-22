const form = document.querySelector('form');
const email = form.email;

function valid () {
  const messageBox = document.getElementById('message-box')
  messageBox.innerHTML= 'Invalid input. Your email should be in lowercase. Form has not been submitted';
  messageBox.classList.add('active')
}

form.addEventListener('submit', (myform) => {
  if (email.value !== email.value.toLowerCase())
  {
    myform.preventDefault();
    valid();
  }
});

