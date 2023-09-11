const config = {
  'hello':'hi', 
  'hey':'namaste',
  'help':'type \n hello, hey, lorem(), story -tc (thirsty crow)',
  'lorem()':'lorem ipsum ',
  'story -tc': 'Cannot fetch story. try again letter',
};

function toggleJsonInput() {
  const jsonInputDiv = document.getElementById('jsonInputDiv');
  jsonInputDiv.style.display = jsonInputDiv.style.display === 'block' ? 'none' : 'block';
}

function storeJsonData() {
  jsonDiv = document.getElementById('jsonInputDiv');
  jsonDiv.style.display = 'none';
   jsonData = document.getElementById('jsonData').value;
  try {
     const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>Data Saving <i>Success</i>...</p>`;
  } catch (error) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<p>Error: Json Parse Error!</p>`;
  }
}

function executeCommand() {
  const commandInput = document.getElementById('command');
  const outputDiv = document.getElementById('output');

  const command = commandInput.value.trim();

  if (command === '') {
    return;
  }
  try {
    const result = getConfigResult(command);
    outputDiv.innerHTML += `<p>ShevamV@Terminal $ ${command}</p>`;
    outputDiv.innerHTML += `<pre>&gt; ${result}</pre>`;
  } catch (error) {
    outputDiv.innerHTML += `<p>ShevamV@Terminal $ ${command}<br>Error: ${error.message}</p>`;
  }
  commandInput.value = '';
}

function getConfigResult(command) {
   if (config.hasOwnProperty(command)) {
    return config[command];
  } else {
    throw new Error('Command not found');
  }
}

function checkEnter(event) {
  if (event.key === 'Enter') {
    executeCommand();
  }
}
