       // Toggle the visibility of the JSON input div
function toggleJsonInput() {
    const jsonInputDiv = document.getElementById('jsonInputDiv');
    jsonInputDiv.style.display = jsonInputDiv.style.display === 'none' ? 'block' : 'none';
}

// Save JSON data to Config.js
function storeJsonData() {
    const jsonData = document.getElementById('jsonData').value;

    try {
        // Parse the JSON data to validate it
        JSON.parse(jsonData);

        // Update or append to your config object here
        // For example, you can add it to an existing "config" object:
        const config = {
            // ... (existing config data)
        };
        const newData = JSON.parse(jsonData);
        Object.assign(config, newData);

        // Convert back to JSON and update Config.js
        const updatedConfig = JSON.stringify(config, null, 4); // Format with 4 spaces
        // Assuming you have a file writer function or use an appropriate method to save to Config.js
        // Example:
        // saveConfigToFile(updatedConfig);

        // Inform the user that data has been saved
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML += `<p>Data saved to Config.js</p>`;
    } catch (error) {
        // Handle JSON parsing errors
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML += `<p>Error: Invalid JSON data</p>`;
    }
}
 // JavaScript code to handle user commands and display results
       
function executeCommand() {
            const commandInput = document.getElementById('command');
            const outputDiv = document.getElementById('output');

            // Get the user's command
            const command = commandInput.value.trim();

            if (command === '') {
                // If no command provided, do nothing
                return;
            }

            // Process the command using Config.js
            try {
                const result = getConfigResult(command);
                outputDiv.innerHTML += `<p>ShevamV@terminal $ ${command}</p>`;
                outputDiv.innerHTML += `<pre>&gt; ${result}</pre>`;
              outputDiv.scrollTop = outputDiv.scrollHeight;
            } catch (error) {
                outputDiv.innerHTML += `<p>ShevamV@Terminal $ ${command}<br>Error: ${error.message}</p>`;
            }
          
            // Clear the input field
            commandInput.value = '';
        }

        // Load and execute commands from the Config.js file
        function getConfigResult(command) {
            // You can customize this function to load and execute commands from Config.js
            // For simplicity, here's a basic example:

            // Config.js contains a JavaScript object mapping commands to results
            const config = {
                'hello': 'Hello, world!',
                'date': new Date().toString(),
              'lorem()': 'Lorem ipsum dolor sit amet, \n consectetur adipiscing elit. Fusce venenatis, velit non \nscelerisque bibendum, ante quam mattis libero, a sagittis purus \nfelis sit amet quam. Maecenas consectetur \norci ac quam semper, id congue libero feugiat.\n Sed posuere velit ac eros ultrices \nscelerisque. Suspendisse fringilla, libero sit amet ultrices laoreet,\n quam tortor ullamcorper libero, a\nt ullamcorper lectus odio eu tellus. \nIn hac habitasse platea dictumst. \nQuisque egestas pharetra purus, id viverra \ntortor. Sed euismod massa a ante cursus varius. Sed ac velit vel \nvelit porttitor dapibus. Vivamus \neget eleifend risus. Vestibulum et\n nisi nec turpis blandit bibendum. Sed \nnon lacinia orci. Cras tristique,\n nulla at ultrices sollicitudin, felis\n ligula tincidunt urna, at suscipit \nelit ex auctor libero. Suspendisse potenti.'
                // Add more commands and their corresponding results here
            };

            // Check if the command exists in the configuration
            if (config.hasOwnProperty(command)) {
                return config[command];
            } else {
                throw new Error('Command not found');
            }
        }

        // Event listener to check if the Enter key is pressed
        function checkEnter(event) {
            if (event.key === 'Enter') {
                executeCommand();
            }
        }
