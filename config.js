const config = {
  'hello':'hi', 
  'hey':'namaste',
  'help':'type \n hello, hey, lorem(), story -tc (thirsty crow) timetable -day(only 3 letters)',
    'print()': 'Hello world',
    'lorem()': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\ Fusce venenatis, velit non scelerisque bibendum, ante quam mattis libero, a sagittis purus felis sit amet quam. Maecenas consectetur orci ac quam semper, id congue libero feugiat. Sed posuere velit ac eros ultrices scelerisque. Suspendisse fringilla, libero sit amet ultrices laoreet, quam tortor ullamcorper libero, at ullamcorper lectus odio eu tellus. In hac habitasse platea dictumst. Quisque egestas pharetra purus, id viverra tortor. Sed euismod massa a ante cursus varius. Sed ac velit vel velit porttitor dapibus. Vivamus eget eleifend risus. Vestibulum et nisi nec turpis blandit bibendum. Sed non lacinia orci. Cras tristique, nulla at ultrices sollicitudin, felis ligula tincidunt urna, at suscipit elit ex auctor libero. Suspendisse potenti.',
    'longText()': 'This is a very long text string that spans multiple lines. It can be used to test how your terminal handles large amounts of text.',
    'story -tc': 'Once upon a time, in a hot summer day, a thirsty crow searched for water everywhere. At last, it found a pitcher with a little water at the bottom. The crow couldn\'t reach the water, so it collected pebbles and dropped them one by one into the pitcher until the water level rose, and the crow could quench its thirst.',
        'timetable -mon': '[SST, Science, Hindi, English || Maths, Library, Yoga, Computer]',
        'timetable -tue': '[SST, Science, Hindi, English || Maths, Arts, Yoga, Computer]',
        'timetable -wed': '[SST, Science, Hindi, English || Maths, Yoga, Yoga, Computer]',
        'timetable -thu': '[SST, Science, Hindi, English || Maths, Games, Sanskrit, WE]',
        'timetable -fri': '[SST, Science, Hindi, English || Maths, Games, Sanskrit, WE]',
        'timetable -sat': '[SST, Science, Hindi, English || Maths, Arts, CCA, CCA]',
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
