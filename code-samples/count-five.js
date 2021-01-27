
{/* <html>

<body>
  <button id="add-five">Add 5</button>
  <p id='result'>0</p>
</body>

</html> */}


var addFiveButton = document.getElementById('add-five');
var resultElement = document.getElementById('result');

// This one below converts everything I enter into a number
var count = parseInt(result.textContent);

addFiveButton.addEventListener('click', function(event) {

  event.preventDefault();

  count = count + 5;

  resultElement.textContent = count;
})