// controllers/bfhlController.js

exports.processData = (req, res) => {
    const { data, file_b64 } = req.body;

    // Extract numbers and alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    // Find the highest lowercase alphabet
    const lowercaseAlphabets = alphabets.filter(ch => ch === ch.toLowerCase());
    const highestLowercase = lowercaseAlphabets.sort().pop() || null;

    // File validation (this is a simple mock validation)
    const fileValid = file_b64 ? true : false;
    const fileMimeType = 'image/png'; // Example MIME type, can be adjusted
    const fileSizeKB = 100; // Example file size

    // Respond with processed data
    res.json({
        is_success: true,
        user_id: "your_name_01012000",  // Replace with actual dynamic logic
        email: "your_email@example.com",
        roll_number: "your_roll_number",  // Replace with actual dynamic logic
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
        file_valid: fileValid,
        file_mime_type: fileMimeType,
        file_size_kb: fileSizeKB
    });
};

exports.getOperationCode = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};