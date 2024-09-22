const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Parse JSON payloads

// POST method: Accepts JSON and processes the request
app.post('/bfhl', (req, res) => {
    const { data, file_b64 } = req.body;

    // Extract numbers and alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    // Find the highest lowercase alphabet
    const lowercaseAlphabets = alphabets.filter(ch => ch === ch.toLowerCase());
    const highestLowercase = lowercaseAlphabets.sort().pop() || null;

    // File validation (fake validation here, you should validate it properly)
    const fileValid = file_b64 ? true : false;  // Change this based on actual validation logic
    const fileMimeType = 'image/png';  // Example MIME type, change based on actual logic
    const fileSizeKB = 100;  // Example file size, adjust accordingly

    res.json({
        is_success: true,
        user_id: "your_name_01012000",  // Replace with dynamic logic
        email: "your_email@example.com",
        roll_number: "your_roll_number",  // Replace with dynamic logic
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
        file_valid: fileValid,
        file_mime_type: fileMimeType,
        file_size_kb: fileSizeKB
    });
});

// GET method: Returns a hardcoded operation code
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});