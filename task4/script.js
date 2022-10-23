const  testTextField = document.querySelector('#testTextField');
testTextField.onclick = function() {
  // тело обработчика
    const userText = prompt('Введите текст');
    const userTextField = document.querySelector('a');
    userTextField.textContent = userText;
    console.log('Текст в a изменён на', userText);
    // конец тела обработчика
  }

  testTextField.addEventListener('click', function(event) {
    // тело обработчика
    event.preventDefault();
    // конец тела обработчика
  })