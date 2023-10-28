const form = document.getElementById('form-input');
const emailInput = document.getElementById('email-input');
const alertMsg = document.querySelector('.alert')
const formControl = document.querySelector('.form-control');

const card = document.querySelector('.card');
const cardValidation = document.querySelector('.card-validation');

const btnDismiss = document.getElementById('btn-dismiss');

function subscribeForm(e) {
  e.preventDefault();

  let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (filter.test(emailInput.value)) {
    console.log('success');
    card.style.display = 'none';
    cardValidation.style.display = 'block';
  } else {
    console.log('error');
    alertMsg.style.display = 'block';
    emailInput.style.backgroundColor = '#ffb5b0';
    emailInput.style.webkitTextFillColor = '#e21212';
    emailInput.style.border = '2px solid #e21212';
    alert('Valid email required!');
    setTimeout(() => {
      alertMsg.style.display = 'block';
      emailInput.style.backgroundColor = 'white';
      emailInput.style.webkitTextFillColor = '#9294a0';
      emailInput.style.border = '2px solid #ccc';
      alertMsg.remove();
    }, 2000)
  }
}

function returnBackToForm() {
  card.style.display = 'flex';
  cardValidation.style.display = 'none';
}


form.addEventListener('submit', subscribeForm);
btnDismiss.addEventListener('click', returnBackToForm);