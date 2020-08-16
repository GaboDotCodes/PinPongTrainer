const number = document.getElementById('mainNumber');
setInterval(() => {
  const randomNumber = Math.ceil(Math.random() * 6);
  number.innerHTML = randomNumber;
}, 500);