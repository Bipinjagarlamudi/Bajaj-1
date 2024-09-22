document.getElementById('submitBtn').addEventListener('click', async function() {
    // Get the JSON input value from the textarea
    const jsonInput = document.getElementById('jsonInput').value;

    try {
        // Parse the JSON input (ensure it's valid)
        const parsedInput = JSON.parse(jsonInput);

        // Check if 'data' field exists in the JSON
        if (!parsedInput.data) {
            alert('The JSON must contain a "data" field.');
            return;
        }

        // Get selected filter options
        const responseFilter = Array.from(document.getElementById('responseFilter').selectedOptions).map(option => option.value);

        // Send POST request to backend API
        const response = await fetch('https://your-backend-url.onrender.com/bfhl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(parsedInput),
        });

        // Parse and display the response
        const data = await response.json();
        displayResponse(data, responseFilter);
    } catch (error) {
        console.error('Error:', error);
        alert('Invalid JSON format or error with API request');
    }
});

// Helper function to display API response in the correct format
function displayResponse(data, filterOptions) {
    const responseDisplay = document.getElementById('responseDisplay');
    let displayHTML = '<h3>Response:</h3>';

    if (filterOptions.includes('numbers')) {
        displayHTML += `<p><strong>Numbers:</strong> ${data.numbers.join(', ')}</p>`;
    }

    if (filterOptions.includes('alphabets')) {
        displayHTML += `<p><strong>Alphabets:</strong> ${data.alphabets.join(', ')}</p>`;
    }

    if (filterOptions.includes('highest_lowercase_alphabet')) {
        displayHTML += `<p><strong>Highest Lowercase Alphabet:</strong> ${data.highest_lowercase_alphabet.join(', ')}</p>`;
    }

    displayHTML += `<p><strong>File Valid:</strong> ${data.file_valid}</p>
                    <p><strong>File Mime Type:</strong> ${data.file_mime_type}</p>
                    <p><strong>File Size KB:</strong> ${data.file_size_kb}</p>`;

    responseDisplay.innerHTML = displayHTML;
}